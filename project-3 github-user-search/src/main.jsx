import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";
import NotFound from "./pages/NotFound.jsx";
import { UserProvider } from "./context/UserProvider.jsx";

import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="users/:userId" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ReduxProvider>
  </React.StrictMode>
);

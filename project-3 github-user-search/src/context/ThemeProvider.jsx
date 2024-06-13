import { createContext, useLayoutEffect, useState } from "react";

export const ThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useLayoutEffect(() => {
    document.body.className = mode === "light" ? "light-mode" : "dark-mode";
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/*
useLayoutEffect will be called before the user can see the visual changes in that render whereas useEffect will be called after a user is able to see the visual changes in that render
*/

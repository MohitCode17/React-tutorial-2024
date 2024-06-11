import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Screen = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <section>
      {isLoggedIn ? (
        <h1>Welcome to our Application</h1>
      ) : (
        <form action="#">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
      )}
    </section>
  );
};

export default Screen;

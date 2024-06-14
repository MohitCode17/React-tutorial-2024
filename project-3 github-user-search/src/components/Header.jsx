import "../styles/Header.css";
import { useTheme } from "../context/index";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();

  const handleThemeChange = () => {
    theme.toggleTheme();
  };

  return (
    <section className="header-container">
      <Link to={"/"} className="title">
        Logo.
      </Link>
      <button onClick={handleThemeChange} className="switch-theme">
        Switch 🌗
      </button>
    </section>
  );
};

export default Header;

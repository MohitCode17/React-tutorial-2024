import "../styles/Header.css";
import { useTheme } from "../context/index";

const Header = () => {
  const theme = useTheme();

  const handleThemeChange = () => {
    theme.toggleTheme();
  };

  return (
    <section className="header-container">
      <h2 className="title">Logo.</h2>
      <button onClick={handleThemeChange} className="switch-theme">
        Switch 🌗
      </button>
    </section>
  );
};

export default Header;

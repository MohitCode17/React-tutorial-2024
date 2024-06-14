import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../store/theme-slice.js";
import "../styles/Header.css";

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  // const theme = useTheme();

  console.log(theme);
  const handleThemeChange = () => {
    dispatch(themeActions.toggleTheme());
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

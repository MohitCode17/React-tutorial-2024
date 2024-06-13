import "../styles/Searchbar.css";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input type="text" className="search-input" />
      <RiSearchLine size={24} className="search-icon" />
    </div>
  );
};

export default SearchBar;

import { useRef } from "react";
import "../styles/Searchbar.css";
import { RiSearchLine } from "react-icons/ri";
import { useGitHubUsers } from "../context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { fetchUsers } = useGitHubUsers();

  const handleUserSearch = () => {
    fetchUsers(inputRef.current.value);
    navigate(`/users/${inputRef.current.value}`);
  };

  return (
    <div className="searchbar-container">
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Search github users..."
      />
      <RiSearchLine
        size={24}
        className="search-icon"
        onClick={handleUserSearch}
      />
    </div>
  );
};

export default SearchBar;

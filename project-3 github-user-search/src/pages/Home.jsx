import SearchBar from "../components/SearchBar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-content">
        <div>
          <h4 className="home-title">Search GitHub Users</h4>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import LoginBtn from "./components/LoginBtn";
import NewsList from "./components/NewsList";
import SearchBar from "./components/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="top-nav">
        <LoginBtn />
        <Link
          to="/bookmarks"
          className="btn-container bookmark"
          style={{ fontSize: "17px"}}
        >
          Bookmarks
        </Link>
      </div>
      <SearchBar />
      <NewsList />
    </div>
  );
};

export default Home;

import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "./context";
import { useAuth0 } from "@auth0/auth0-react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { searchHandler } = useGlobalContext();

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Search HackerNews....</h2>
      <div className="parent-flex">
        <input
          type="text"
          onChange={(e) => searchHandler(e.target.value)}
          className="form-input"
        />
      </div>
    </form>
  );
};

export default SearchBar;

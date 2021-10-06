import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "./context";
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { searchHandler, query, getNews, setLoading } = useGlobalContext();
  const isFirstRun = useRef(true);

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler(searchText);
      }}
    >
      <h2>Search HackerNews</h2>
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

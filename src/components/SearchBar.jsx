import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from '../Globalstate/context'
import { useAuth0 } from "@auth0/auth0-react";
import Pagination_btn from "./Pagination_btn";

const SearchBar = () => {
  const { searchHandler, getNews, query, setLoading } = useGlobalContext();

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 onClick={() => {
        setLoading()
        getNews(query, 0)}}>Search HackerNews....</h2>
      <div className="parent-flex">
        <input
          type="text"
          onChange={(e) => searchHandler(e.target.value)}
          className="form-input"
        />
      </div>
      <Pagination_btn />
    </form>
  );
};

export default SearchBar;

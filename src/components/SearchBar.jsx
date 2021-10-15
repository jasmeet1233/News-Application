import React from "react";
import { useGlobalContext } from "../Globalstate/context";
import Pagination_btn from "./Pagination_btn";
import Filter from "./Filter";

const SearchBar = () => {
  const { searchHandler, getNews, query, setLoading } = useGlobalContext();
  return (
    <>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1
          onClick={() => {
            setLoading();
            getNews(query, 0);
          }}
        >
          Search HackerNews....
        </h1>
        <div className="parent-flex">
          <input
            type="text"
            onChange={(e) => searchHandler(e.target.value)}
            className="form-input"
          />
        </div>
        {/* <ChakraProvider> */}
        <Filter />
        {/* </ChakraProvider> */}
        <Pagination_btn />
      </form>
    </>
  );
};

export default SearchBar;

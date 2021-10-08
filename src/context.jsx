import React, { useContext, useEffect, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import axios from "axios";

const url = `https://hn.algolia.com/api/v1/search?`;
const CancelToken = axios.CancelToken;

const initialState = {
  query: "React",
  news: [],
  page: 0,
  isLoading: true,
  isError: false,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cancelSource = useRef(null);

  const getNews = async (queryData, page) => {
    cancelSource.current = CancelToken.source();

    try {
      const data = await axios.get(`${url}query=${queryData}&page=${page}`, {
        cancelToken: cancelSource.current.token,
      });
      console.log(data);
      if (data.status === 200) {
        dispatch({ type: "FetchSuccess", payload: data.data.hits });
      } else {
        throw new Error("");
      }
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: "FetchFail" });
    }
  };

  const searchHandler = (query) => {
    dispatch({ type: "QueryHandle", payload: query });
  };

  const setLoading = () => {
    dispatch({ type: "Set_Loading" });
  };

  useEffect(() => {
    setLoading();
    getNews(state.query, state.page);
     return () => {
       cancelSource.current.cancel();
     };
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, searchHandler, getNews }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };

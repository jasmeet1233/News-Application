import React, { useContext, useEffect, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import axios from "axios";

const url = `https://hn.algolia.com/api/v1/search?`;
const frontPageUrl = "https://hn.algolia.com/api/v1/search?tags=front_page";
const CancelToken = axios.CancelToken;

const initialState = {
  query: "React",
  news: [],
  page: 0,
  nbPages: 0,
  isLoading: true,
  isError: false,
  sort: "relevance",
  isSignedIn: false,
  userData: "",
  bookmarkData: []
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const firstLoad = useRef(true);
  const cancelSource = useRef(null);

  const getNews = async (queryData = "", page = 0) => {
    cancelSource.current = CancelToken.source();
    try {
      const data = await axios.get(`${url}query=${queryData}&page=${page}`, {
        cancelToken: cancelSource.current.token,
      });
      console.log(data);
      console.log(data.data);
      if (data.status === 200) {
        if (state.sort === "num_comments") {
          let badaData = data.data;
          badaData.hits = badaData.hits.sort(
            (a, b) => b["num_comments"] - a["num_comments"]
          );
          dispatch({ type: "FetchSuccess", payload: badaData });
        } else {
          dispatch({ type: "FetchSuccess", payload: data.data });
        }
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

  const paginate = (cmd) => {
    dispatch({ type: "PAGINATE", pageCommand: cmd });
  };

  const toggleSort = (para) => {
    if (para === "num_comments") {
      let badaData = state.news.sort(
        (a, b) => b["num_comments"] - a["num_comments"]
      );
      dispatch({
        type: "TOGGLE_SORT",
        payload: { data: badaData, sortType: para },
      });
    } else {
      let badaData = state.news.sort((a, b) => b["points"] - a["points"]);
      dispatch({
        type: "TOGGLE_SORT",
        payload: { data: badaData, sortType: para },
      });
    }
  };

  const signInHandler = (data) => {
    dispatch({ type: "SIGN_IN", payload: data });
  };

  const signOutHandler = () => {
    dispatch({ type: "SIGN_OUT"});
  };

  const add2fav = (data) => {
    dispatch({ type: 'ADD_BOOKMARK',  payload: data});
  }

  useEffect(() => {
    setLoading();
    getNews(state.query, state.page);
    return () => {
      cancelSource.current.cancel();
    };
  }, [state.query]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        searchHandler,
        getNews,
        setLoading,
        paginate,
        toggleSort,
        signInHandler,
        signOutHandler,
        add2fav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };

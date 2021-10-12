import React, { useContext, useEffect, useReducer, useRef } from "react";
import { reducer } from "./reducer";
import axios from "axios";

const url = `https://hn.algolia.com/api/v1/search?`;
const frontPageUrl = 'https://hn.algolia.com/api/v1/search?tags=front_page';
const CancelToken = axios.CancelToken;

const initialState = {
  query: "React",
  news: [],
  page: 0,
  nbPages: 0,
  isLoading: true,
  isError: false,
  sort: 'relevance'
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
      console.log(data.data)
      if (data.status === 200) {
        dispatch({ type: "FetchSuccess", payload: data.data});
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
    dispatch({ type: "PAGINATE", pageCommand: cmd});
  }

  const sortData = (data, condition) => {
    dispatch({ type: "Filter", payload: data, condition });
  }

   const filterPerPage = (sortCondition) => {
     const updated_arr = state.news.sort(
       (a, b) => b[sortCondition] - a[sortCondition]
     );
     sortData(updated_arr, sortCondition);
   };

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
        sortData,
        filterPerPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider};

import React, {useContext, useEffect, useReducer} from "react";
import { reducer } from "./reducer";

const url = `https://hn.algolia.com/api/v1/search?`;

const initialState = {
  query: 'React',
  news: [],
  page:0,
  isLoading : true,
  isError: false
}
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNews = async (queryData, page) => {
    try {
      const response = await fetch(
        `${url}query=${queryData}&page=${page}`
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: "FetchSuccess", payload: data.hits });
    } catch (error) {
      dispatch({ type: "FetchFail" });
    }
  };

  const searchHandler = (query) => {
    dispatch({ type: "QueryHandle", payload: query });
  };

  const setLoading = () => {
    dispatch({type: 'Set_Loading'})
  }

  useEffect(() => {
    setLoading();
    getNews(state.query, state.page);
  }, [state.query])

  return (
    <AppContext.Provider
      value={{ ...state, searchHandler, getNews}}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export {useGlobalContext, AppProvider}
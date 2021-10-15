export const reducer = (state, action) => {
  if (action.type === "QueryHandle") {
    return { ...state, query: action.payload, isLoading: true, page: 0 };
  }

  if (action.type === "FetchSuccess") {
    return {
      ...state,
      isLoading: false,
      news: action.payload.hits,
      nbPages: action.payload.nbPages,
    };
  }

  if (action.type === "FetchFail") {
    return { ...state, isError: true, isLoading: false };
  }

  if (action.type === "Set_Loading") {
    return { ...state, isLoading: true };
  }

  if (action.type === "PAGINATE") {
    if (action.pageCommand === "next")
      return { ...state, page: state.page + 1 };
    else return { ...state, page: state.page - 1 };
  }

  if (action.type === "Filter") {
    return { ...state, news: action.payload, sort: action.condition };
  }

  if (action.type === "TOGGLE_SORT") {
    return {
      ...state,
      sort: action.payload.sortType,
      news: action.payload.data,
    };
  }

  if (action.type === "SIGN_IN") {
    return { ...state, userData: action.payload, isSignedIn: true };
  }

  if (action.type === "SIGN_OUT") {
    return { ...state, userData: "", isSignedIn: false };
  }
  if(action.type === 'ADD_BOOKMARK'){
    return { ...state, bookmarkData: state.bookmarkData.concat(action.payload)};
  }

  //Default Return
  return {
    ...state
  }
};

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
};

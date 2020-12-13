export const setIsLoading = (isLoading) => {
  return {
    type: "SET_IS_LOADING",
    payload: isLoading,
  };
};

export const setRoute = (route) => {
  return {
    type: "SET_ROUTE",
    payload: route,
  };
};

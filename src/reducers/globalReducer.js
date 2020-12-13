const initialState = {
  isLoading: false,
  route: "/",
};

export default function globalReducer(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  const { type, payload } = action;
  switch (type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: payload };
    case "SET_ROUTE":
      return { ...state, route: payload };
    default:
      return state;
  }
}

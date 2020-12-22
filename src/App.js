import React from "react";
import { useSelector } from "react-redux";
import { useRedirect, useRoutes } from "hookrouter";
import routes from "./routes";
import { Loader } from "./components/index";
import { getIsLoading } from "./selectors/global";
import { StyledApp } from "./style";


function App() {
  useRedirect("/", "/search");
  const routing = useRoutes(routes);
  const isLoading = useSelector((state) => getIsLoading(state));

  return (
    <StyledApp>
      {isLoading && <Loader />}
      {routing}
    </StyledApp>
  );
}

export default App;

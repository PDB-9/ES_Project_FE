import React from "react";

import Spinner from "./Spinner";
import { StyledLoader } from "./styled";

const Loader = () => {
  return (
    <StyledLoader>
      <Spinner />
    </StyledLoader>
  );
};

export default Loader;

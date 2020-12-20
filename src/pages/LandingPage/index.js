import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Field, Button } from "../../components/index";
import { getNewValidation, handleActionSearch } from "./utils";
import {
  StyledLandingPage,
  LandingWrapper,
  FieldWrapper,
  Circle1,
  Circle2,
  Circle3,
} from "./style";

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const [validation, setValidation] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setSearch(value);
  };

  const handleSearch = () => {
    const newValidation = getNewValidation(search);
    if (!newValidation) {
      handleActionSearch(search, "all");
    }

    setValidation(newValidation);
  };

  return (
    <StyledLandingPage>
      <LandingWrapper>
        <h1>Spoti.py</h1>
        <p>Your incredibly fast search to discover songs in no time.</p>
        <FieldWrapper>
          <Field
            label="Title / Artist"
            value={search}
            onChange={(e) => handleChange(e)}
            error={!!validation}
          />
          <Button onClick={handleSearch} style={{ height: "100%" }}>
            <SearchIcon style={{ marginRight: "0.2rem", fontSize: "2rem" }} />
            Search
          </Button>
        </FieldWrapper>
      </LandingWrapper>
      <Circle1 />
      <Circle2 />
      <Circle3 />
    </StyledLandingPage>
  );
};

export default LandingPage;

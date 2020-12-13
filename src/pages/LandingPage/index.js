import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Field, Button } from "../../components/index";
import { getNewValidation, handleActionSearch } from "./utils";
import { StyledLandingPage, LandingWrapper, FieldWrapper } from "./style";

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
      handleActionSearch(search);
    }

    setValidation(newValidation);
  };

  return (
    <StyledLandingPage>
      <LandingWrapper>
        <h1>Spoti.py</h1>
        <FieldWrapper>
          <Field
            label="Title / Artist / Year"
            value={search}
            onChange={(e) => handleChange(e)}
            error={!!validation}
          />
          <Button onClick={handleSearch}>
            <SearchIcon style={{ marginRight: "0.2rem", fontSize: "2rem" }} />
            Search
          </Button>
        </FieldWrapper>
      </LandingWrapper>
    </StyledLandingPage>
  );
};

export default LandingPage;

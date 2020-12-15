import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { StyledDropdown } from "./style";

const Field = ({ filter, handleChange }) => {
  return (
    <StyledDropdown>
      <FormControl className="dropdown">
        <InputLabel>Filter</InputLabel>
        <Select value={filter} onChange={handleChange}>
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"title"}>Title</MenuItem>
          <MenuItem value={"artist"}>Artist</MenuItem>
          <MenuItem value={"year"}>Year</MenuItem>
        </Select>
      </FormControl>
    </StyledDropdown>
  );
};

export default Field;

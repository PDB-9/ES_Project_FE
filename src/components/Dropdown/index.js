import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { StyledDropdown } from "./style";

const Field = ({ label, filter, handleChange, ...props }) => {
  return (
    <StyledDropdown {...props}>
      <FormControl className="dropdown">
        <InputLabel>{label}</InputLabel>
        {label.includes("Filter") ? (
          <Select value={filter} onChange={handleChange}>
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"artist"}>Artist</MenuItem>
          </Select>
        ) : (
          <Select value={filter} onChange={handleChange}>
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"1"}>Explicit Only</MenuItem>
            <MenuItem value={"0"}>No Explicit</MenuItem>
          </Select>
        )}
      </FormControl>
    </StyledDropdown>
  );
};

export default Field;

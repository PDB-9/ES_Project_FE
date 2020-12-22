import React from "react";
import { TextField } from "@material-ui/core";
import { StyledField } from "./style";

const Field = ({ label, value, onChange, error, size, ...props }) => {
  return (
    <StyledField {...props}>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        size={size}
        className="field"
        required={label.includes("Title / Artist") && true}
      />
    </StyledField>
  );
};

export default Field;

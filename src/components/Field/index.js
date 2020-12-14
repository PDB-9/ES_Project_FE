import React from "react";
import { TextField } from "@material-ui/core";
import { StyledField } from "./style";

const Field = ({ label, value, onChange, error, size }) => {
  return (
    <StyledField>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        size={size}
        className="field"
      />
    </StyledField>
  );
};

export default Field;

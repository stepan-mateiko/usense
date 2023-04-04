import React from "react";
import { Typography, TextField } from "@mui/material";
import propTypes from "prop-types";

const Input = ({ value, onChange }) => {
  return (
    <>
      <Typography sx={{ fontSize: 48 }}>Password Check</Typography>
      <TextField
        id="outlined-password-input"
        label="Password"
        variant="outlined"
        type="password"
        sx={{ backgroundColor: "#57C5B6", color: "black" }}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;

Input.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};

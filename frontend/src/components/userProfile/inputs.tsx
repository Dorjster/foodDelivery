"use client";

import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import Input from "@mui/material/Input";
type Inputtype = {
  value: string | number | readonly string[] | undefined;
  label: string;
};

export const Inputs = (props: Inputtype) => {
  const { value, label } = props;
  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        paddingLeft: "80px",
        paddingRight: "80px",
        paddingBottom: "30px",
        marginBottom: "20px",
      }}
    >
      <TextField
        id="outlined-required"
        label={label}
        defaultValue={value}
        // sx={{ width: "200px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ width: "80px", paddingTop: "10px" }}
            >
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
};

"use client";
import React, { useState, useEffect } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Button } from "@mui/material";

type InputProps = {
  value: string | number | readonly string[] | undefined;
  label: string;
  editable: boolean;
};

export const Inputs = (props: InputProps) => {
  const { value, label, editable } = props;

  return (
    <Box
      sx={{
        display: "flex",
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
        value={value}
        disabled={!editable}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        sx={{ flexGrow: 1 }}
      />
      {/* {editable && (
        <Button onClick={() => handleInputChange(inputValue)}>Reset</Button>
      )} */}
    </Box>
  );
};

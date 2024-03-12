"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import { Button, Grid, Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useRouter } from "next/navigation";

export const HeaderRight = () => {
  const { push } = useRouter();

  const handlePush = () => {
    push("/login");
  };
  return (
    <Grid
      sx={{
        width: "fit-content",

        display: "flex",
        gap: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        variant="outlined"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          borderRadius: "8px",
          borderColor: "black",
          marginTop: "20px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Хайх "
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "38px",

          display: "flex",
          fontSize: "17px",
          gap: "10px",
          fontFamily: "sans-serif",
          marginTop: "20px",
          fontWeight: "700px",
        }}
      >
        <ShoppingBasketOutlinedIcon sx={{ fontSize: "30px" }} />
        <Box>Сагс</Box>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "38px",
          cursor: "pointer",
          marginLeft: "20px",
          display: "flex",
          fontSize: "17px",
          gap: "10px",
          fontFamily: "sans-serif",
          marginTop: "20px",
          fontWeight: "700px",
        }}
      >
        <PersonOutlineIcon sx={{ fontSize: "30px" }} />
        <Button
          onClick={handlePush}
          sx={{ fontWeight: "700px", color: "black", padding: "5px" }}
        >
          Нэвтрэх
        </Button>
      </Stack>
    </Grid>
  );
};

"use client";

import { AccountCircle } from "@mui/icons-material";
import { Avatar, Box, Grid, Stack } from "@mui/material";
import { Inputs } from "./inputs";
import React from "react";
import { useData } from "../../context/dataProvider";
export const Profile = () => {
  const { userData } = useData();
  const firstLetter = userData?.name.charAt(0);

  return (
    <Stack sx={{}}>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh", width: "100vw" }}
      >
        <Grid
          sx={{
            height: "422px",
            width: "448px",
            paddingBottom: "22px",

            paddingTop: "2px",
            gap: "50px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ width: "200px", height: "200px", fontSize: "80px"  }}>
              {firstLetter}
            </Avatar>
          </Box>
          <Box>
            {" "}
            <Inputs value={userData?.name} label="Name" />
            <Inputs value={userData?.phone} label="Phone" />
            <Inputs value={userData?.email} label="Email" />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

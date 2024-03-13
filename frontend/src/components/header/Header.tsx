"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";

import { Container } from "postcss";

import { HeaderRight } from "./HeadR";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
export const Header = () => {
  const { push } = useRouter();
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: "60px",
        padding: "0 151px",
        width: "100vw",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
          gap: "10px",
          marginTop: "10px",
          fontFamily: "sans-serif",
          fontWeight: "600",
        }}
      >
        <Image alt="" src={"/Vector.png"} width={30} height={25} />
        <Grid
          item
          sx={{
            marginBottom: "17px",
          }}
        >
          <Button
            onClick={() => {
              push("/");
            }}
            sx={{
              color: "black",
            }}
          >
            НҮҮР
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            marginBottom: "17px",
          }}
        >
          <Button
            onClick={() => {
              push("/");
            }}
            sx={{
              color: "black",
            }}
          >
            Хоолны цэс
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            marginBottom: "17px",
          }}
        >
          <Button
            onClick={() => {
              push("/");
            }}
            sx={{
              color: "black",
            }}
          >
            Хүргэлтийн бүс
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <HeaderRight />
      </Grid>
    </Grid>
  );
};

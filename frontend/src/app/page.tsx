"use client";

import Image from "next/image";

import { Stack } from "@mui/material";

import { Deatch } from "@/components/homep/Detail";

import { Foods } from "@/components/homep/Foods";

import React from "react";
import axios from "axios";
export const AllFoods = async () => {
  try {
    const { data } = await axios.post<FoodType[]>(
      "https://fooddelivery-pg8c.onrender.com/foods"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  // const AllFoods = async () => {
  //   try {
  //     const { data } = await axios.get<FoodType[]>(
  //       "http://localhost:8000/foods"
  //     );

  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const data = AllFoods();
  const data = await AllFoods();
  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack>
        <Stack
          sx={{
            width: "100vw",
            height: "860px",
            position: "relative",
            marginTop: "40px",
          }}
        >
          <Image src="/Desktop - 43.png" alt="" layout="fill" />
        </Stack>
        <div
          style={{
            padding: "120px 0",
            gap: "90px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Deatch />
          <Foods handleOpen={handleOpen} />
        </div>
      </Stack>
    </Stack>
  );
}

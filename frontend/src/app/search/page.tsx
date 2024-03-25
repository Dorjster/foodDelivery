"use client";

import React from "react";
import axios from "axios";
import { useContext } from "react";

import { Searched } from "@/components/search/search";
import { useSearchParams } from "next/navigation";
import { Stack } from "@mui/material";
const FilteredFoods = async () => {
  const params = useSearchParams();
  const id = params.get("id");

  const body = {
    filter: {
      $or: [
        {
          name: {
            $regex: id,
            $options: "i",
          },
        },
        {
          price: {
            $regex: id,
          },
        },
      ],
    },
  };

  try {
    const { data } = await axios.post<FoodType[]>(
      "https://fooddelivery-pg8c.onrender.com/foods",
      body
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Search() {
  const data: FoodType[] | undefined = await FilteredFoods();

  return (
    <Stack sx={{ width: "100vw", alignItems: "center" }}>
      <div style={{ width: "90%" }}>
        <div
          style={{
            fontSize: "20px",
            marginLeft: "150px",
            marginBottom: "30px",

            borderRadius: "17px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "170px",
            fontFamily: "sans-serif",
            padding: "5px 0px",

            marginTop: "60px",
          }}
        >
          ilerts
        </div>
        <Searched data={data} />
      </div>
    </Stack>
  );
}

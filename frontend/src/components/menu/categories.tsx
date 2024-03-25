"use client";

import React, { useState, useEffect } from "react";
import { Stack, Button } from "@mui/material";
import axios from "axios";

import { CategoriesType } from "@/app/menu/page";
import { Food } from "./foods";

type DataType = {
  name: string;
  foodId: FoodType[];
  id: string;
};

type CategoryType = {
  categories: CategoriesType[];
};

export const CateFoods = ({ categories }: CategoryType) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [basketItems, setBasketItems] = useState<FoodType[]>([]);
  const addToBasket = (food: FoodType) => {
    setBasketItems([...basketItems, food]);
  };
  useEffect(() => {
    if (selectedCategory) {
      fetchFoods(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchFoods = async (categoryId: string) => {
    try {
      const { data } = await axios.post<DataType>(
        "https://fooddelivery-pg8c.onrender.com/category",
        {
          id: categoryId,
        }
      );

      console.log(data.foodId);

      setFoods(data.foodId);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "85%",

            marginTop: "70px",
            marginBottom: "70px",
          }}
        >
          {categories.map((category: any) => (
            <div
              key={category._id}
              style={{
                borderRadius: "10px",
                cursor: "pointer",
                border:
                  selectedCategory === category._id
                    ? "2.5px solid #18BA51 "
                    : "1px solid grey",
                display: "flex",
                backgroundColor: "white",
              }}
              onClick={() => handleClick(category?._id)}
            >
              <Button
                sx={{
                  width: "283px",
                  height: "40px",
                  color: "black",
                }}
              >
                {category.name}
              </Button>
            </div>
          ))}
        </div>
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: "30px",
          alignItems: "center",
          direction: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "100px",
        }}
      >
        <Food foods={foods as FoodType[]} />
      </Stack>
    </Stack>
  );
};

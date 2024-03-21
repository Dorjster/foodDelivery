"use client";

import { MouseEvent, useContext, useState } from "react";
import { Details } from "./modal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

import { Stack, Box } from "@mui/material";
import Image from "next/image";

import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import { BasketContext } from "@/context/basket";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "961px",
  height: "524px",
  gap: "20px",
  p: 1,
  borderRadius: "16px",
  backgroundColor: "white",
};

type AllFoodsProps = {
  foods: FoodType[];
};

export const Food = ({ foods }: AllFoodsProps) => {
  const [foundFood, setFoundFood] = useState<FoodType | null>(null);
  const [open, setOpenModal] = useState<boolean>(false);
  const handleClose = () => setOpenModal(false);
  let [count, setCount] = useState(1);
  const handleModalClick = () => setOpenModal(!open);
  const { basket, setBasket } = useContext(BasketContext);
  const handleFoodClick = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;
    const filteredFood = foods.find(({ _id }) => _id === foodId);
    handleModalClick();
    setFoundFood(filteredFood as FoodType);
  };

  const handleCount = () => {
    count = count + 1;
    setCount(count);
  };
  const handleMinus = () => {
    count = count - 1;
    if (count <= 0) {
      count = 1;
    }
    setCount(count);
  };
  const itemsBasket = JSON.parse(localStorage.getItem("foods") || "[]");

  const addToBasket = () => {
    if (foundFood) {
      const itemToAdd = { ...foundFood, quantity: count };
      localStorage.setItem(
        "foods",
        JSON.stringify([...itemsBasket, itemToAdd])
      );

      console.log(itemToAdd);
    }
    setOpenModal(false); // Close the modal after adding to basket
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          gap: "55px",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {foods?.map((el: FoodType, index: number) => (
          <div
            style={{ width: "450px", marginLeft: "0px" }}
            key={index}
            onClick={handleFoodClick}
            id={el._id}
          >
            <Details zurag={el.image} text={el.name} une={el.price} />
          </div>
        ))}
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <Stack direction="row" sx={{ padding: "10px" }}>
            <div
              style={{ width: "505px", height: "502px", position: "relative" }}
            >
              {foundFood?.image && (
                <Image
                  src={foundFood?.image}
                  alt=""
                  layout="fill"
                  style={{ borderRadius: "6px" }}
                />
              )}
            </div>
            <Stack sx={{ gap: "60px", paddingLeft: "30px" }}>
              <div
                style={{
                  width: "370px",
                  display: "flex",
                  justifyContent: "end",
                  paddingRight: "20px",
                }}
              >
                <div
                  style={{ position: "absolute", right: "10px" }}
                  onClick={handleClose}
                >
                  <ClearIcon />
                </div>
              </div>
              <Stack sx={{}}>
                <div
                  style={{
                    fontSize: "40px",
                    fontFamily: "sans-serif",
                  }}
                >
                  {foundFood?.name}
                </div>
                <div
                  style={{
                    fontSize: "29px",
                    fontFamily: "sans-serif",

                    color: "#18BA51",
                  }}
                >
                  {foundFood?.price} ₮
                </div>
              </Stack>
              <Stack>
                <div style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
                  Орц
                </div>
                <div
                  style={{
                    width: "86%",
                    backgroundColor: "#f6f6f6",
                    height: "40px",
                    padding: "5px 5px",
                    borderRadius: "6px",
                    marginTop: "7px",
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  {foundFood?.ingredient}
                </div>
              </Stack>
              <Stack sx={{ gap: "10px" }}>
                <div style={{ fontFamily: "sans-serif" }}>Тоо</div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    onClick={handleMinus}
                    sx={{
                      backgroundColor: "#18BA51",
                      color: "white",
                      borderRadius: "6px",
                    }}
                  >
                    -
                  </Button>
                  <div style={{ fontFamily: "sans-serif" }}>{count}</div>
                  <Button
                    onClick={handleCount}
                    sx={{
                      backgroundColor: "#18BA51",
                      color: "white",
                      borderRadius: "6px",
                    }}
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={addToBasket}
                  sx={{
                    backgroundColor: "#18BA51",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Сагсанд хийх
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Modal>
    </div>
  );
};

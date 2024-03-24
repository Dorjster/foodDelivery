"use client";
import { Stack } from "@mui/material";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { Details } from "../homep/Modal";
import { Modal, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

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
type IntrinsicAttributes = any;

type ALL = {
  data: FoodType[] & IntrinsicAttributes;
};
export const Searched = (props: ALL) => {
  const { data } = props;

  let [count, setCount] = useState(1);

  const [foundFood, setFoundFood] = useState<FoodType | null>(null);

  const [open, setOpenModal] = useState<boolean>(false);

  const handleClose = () => setOpenModal(false);

  const handleModalClick = () => setOpenModal(!open);

  const handleFoodClick = (event: MouseEvent<HTMLDivElement>) => {
    const food = event.currentTarget.id;

    const filteredFood = data.find((ele: any) => ele._id === food);

    setFoundFood(filteredFood as FoodType);

    handleModalClick();
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

  const itemsBasket =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("foods") || "[]")
      : [];

  const addToBasket = () => {
    if (foundFood) {
      const itemToAdd = { ...foundFood, quantity: count };
      localStorage.setItem(
        "foods",
        JSON.stringify([...itemsBasket, itemToAdd])
      );

      console.log(itemToAdd);
    }
    setCount(1);
    setOpenModal(false);
  };

  return (
    <Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.length > 0 ? (
          <div>
            <Stack
              direction="row"
              sx={{
                gap: "30px",
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "90px",
              }}
            >
              {data?.map((el: FoodType, index: number) => (
                <div key={index} id={el._id} onClick={handleFoodClick}>
                  <Details zurag={el.image} text={el.name} une={el.price} />
                </div>
              ))}
            </Stack>
          </div>
        ) : (
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              padding: "170px 100px",
            }}
          >
            <Image alt="" src="/non.png" width={133} height={133} />
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                color: "grey",
                marginTop: "30px",
              }}
            >
              Уучлаарай олдсонгүй...
            </div>
          </Stack>
        )}
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <Stack direction="row" sx={{ padding: "10px" }}>
            <div
              style={{ width: "535px", height: "502px", position: "relative" }}
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
                  Сагслах
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Modal>
    </Stack>
  );
};

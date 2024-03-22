"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { MouseEvent } from "react";
import { only } from "node:test";

type OrderDetail = {
  price: number;
  image: string;
  name: string;
  ingredient: string[];
  id: any;
  count: number;
  deleteMe: (event: MouseEvent<HTMLDivElement>) => void;
};
export const Model = (props: OrderDetail) => {
  const { price, image, name, ingredient, id, deleteMe, count } = props;

  const [quantity, setQuantity] = useState(count);

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  //   console.log(test);

  //   console.log(Number(price) * Number(amount));
  //   let urjwer = Number(price) * Number(amount);
  //   console.log(urjwer);

  //   useEffect(() => {

  //     setTempTotla(urjwer);
  //   }, [price, amount]);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",

        marginBottom: "20px",
        paddingBottom: "20px",
        paddingTop: "20px",
      }}
    >
      <div>
        <Image
          alt=""
          src={image}
          width={240}
          height={150}
          style={{ borderRadius: "5px" }}
        />
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "sans-serif",
          }}
        >
          <div>
            <div style={{ marginBottom: "20px" }}>{name}</div>
            <div style={{ color: "#18BA51", fontWeight: "bold" }}>{price}₮</div>
          </div>
          <div
            onClick={deleteMe}
            id={id}
            style={{ cursor: "pointer", marginBottom: "40px" }}
          >
            <ClearOutlinedIcon />
          </div>
        </div>
        <div style={{ color: "grey", fontFamily: "sans-serif" }}>
          {ingredient}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Button
            onClick={handleRemove}
            style={{
              backgroundColor: "#18BA51",
              color: "white",
            }}
          >
            <RemoveOutlinedIcon />
          </Button> */}
          <div
            style={{
              fontFamily: "sans-serif",
              marginBottom: "20px",
            }}
          >
            {count} ширхэг
          </div>
          {/* <Button
            onClick={handleAdd}
            style={{
              backgroundColor: "#18BA51",
              color: "white",
            }}
          >
            <AddIcon />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

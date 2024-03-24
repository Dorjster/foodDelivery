"use client";
import React, { useContext, useEffect, useState } from "react";

import { MouseEvent } from "react";
import { Model } from "./Model";
import { json } from "react-router-dom";

// import { ModelForMap } from "./ModelForMap";
type OrderType = {
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};
interface OrderProps {
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}
export const Order: React.FC<OrderProps> = ({ setTotalPrice }) => {
  const [data, setData] = useState([]);

  const itemsBasket = JSON.parse(localStorage.getItem("foods") || "[]");
  useEffect(() => {
    setData(itemsBasket);
  }, []);

  const deleteMe = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;

    const newItem = itemsBasket.filter((el: any) => el._id !== foodId);
    localStorage.setItem("foods", JSON.stringify(newItem));
    setData(newItem);
  };
  useEffect(() => {
    let price = 0;
    itemsBasket?.forEach((item: any) => {
      const num = Number(item.price) * item.quantity;
      price = price + num;
    });
    setTotalPrice(price);
  }, [itemsBasket, setTotalPrice]);

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      {itemsBasket &&
        data?.map((el: any, index: number) => {
          return (
            <div key={index}>
              <Model
                id={el._id}
                deleteMe={deleteMe}
                price={el.price}
                image={el.image}
                name={el.name}
                count={el.quantity}
                ingredient={el.ingredient}
              />
            </div>
          );
        })}
    </div>
  );
};

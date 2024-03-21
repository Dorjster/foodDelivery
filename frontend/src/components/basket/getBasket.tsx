"use client";
import React, { useContext, useEffect, useState } from "react";

import { MouseEvent } from "react";
import { Model } from "./Model";

// import { ModelForMap } from "./ModelForMap";

type OrderType = {
  setInTotal: React.Dispatch<React.SetStateAction<number>>;
};

export const Order = () => {
  const [localData, setLocalData] = useState([]);

  const itemsBasket = JSON.parse(localStorage.getItem("foods") || "[]");
  useEffect(() => {
    setLocalData(itemsBasket);
  }, [] || [localData]);
  console.log(localData);

  //   const deleteItem = (event: MouseEvent<HTMLDivElement>) => {
  //     const foodId = event.currentTarget.id;
  //     const newItems = itemsBasket.filter(
  //       (el: any) => el.foodId && el.foodId._id !== foodId
  //     ); // Add a check for foodId existence
  //     localStorage.setItem("foods", JSON.stringify(newItems)); // Update the localStorage key
  //     setLocalData(newItems);
  //   };
  const deleteMe = (event: MouseEvent<HTMLDivElement>) => {
    const foodId = event.currentTarget.id;

    const newItem = itemsBasket.filter((el: any) => el._id !== foodId);
    localStorage.setItem("foods", JSON.stringify(newItem));
    setLocalData(newItem);
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      {itemsBasket &&
        localData?.map((el: any, index: number) => {
          return (
            <div key={index}>
              <Model
                id={el._id}
                deleteMe={deleteMe}
                price={el.price}
                image={el.image}
                name={el.name}
                ingredient={el.ingredients}
              />
            </div>
          );
        })}
    </div>
  );
};

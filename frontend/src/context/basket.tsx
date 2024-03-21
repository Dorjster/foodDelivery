"use client";
import React from "react";
import { useState, useContext, createContext } from "react";

type BasketContextType = {
  basket: boolean;
  setBasket: React.Dispatch<React.SetStateAction<boolean>>;
};
export const BasketContext = createContext<BasketContextType>(
  {} as BasketContextType
);
export const BasketProvider = ({ children }: any) => {
  const [basket, setBasket] = useState(false);
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

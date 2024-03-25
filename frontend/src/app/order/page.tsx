"use client";

import { InputsFields } from "@/components/order/Input";
import { GiveOrder } from "@/components/order/giveOrder";
import { MakesOrder } from "@/components/order/makeOrder";
import { Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "@/context/dataProvider";
import { useRouter } from "next/navigation";

export interface formData {
  userId: string;
  foods: string[];
  address: string;
  nemelt: string;
  une: string;
}
function Order() {
  const { userData } = useData();
  const [orderPrice, setOrderPrice] = useState<string>(" ");
  const { push } = useRouter();

  const handlePriceUpdate = (price: string) => {
    setOrderPrice(price);
  };
  console.log(orderPrice);

  const [formData, setFormData] = useState<formData>({
    userId: "",
    foods: [],
    address: "",
    nemelt: "",
    une: "",
  });
  useEffect(() => {
    const foodIds = itemsBasket.map((item: any) => item._id);

    setFormData({
      ...formData,
      userId: userData?._id || "",
      foods: foodIds,
      une: orderPrice,
    });
  }, [userData]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://fooddelivery-pg8c.onrender.com/order",
        formData
      );
      localStorage.removeItem("foods");
      console.log(formData);
      push("/history");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  const itemsBasket = JSON.parse(localStorage.getItem("foods") || "[]");

  localStorage.getItem("items");
  const handleInputChange = (inputData: Partial<formData>) => {
    setFormData({ ...formData, ...inputData });
  };

  return (
    <Stack
      direction="row"
      sx={{
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0px",
        gap: "100px",
      }}
    >
      <div
        style={{
          marginTop: "28px",
        }}
      >
        <MakesOrder />
        <InputsFields onInputChange={handleInputChange} />
      </div>
      <div
        style={{
          marginTop: "28px",
        }}
      >
        <GiveOrder
          handleSubmit={handleSubmit}
          updatePrice={handlePriceUpdate}
        />
      </div>
    </Stack>
  );
}

export default Order;

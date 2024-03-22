"use client";

import { InputsFields } from "@/components/order/Input";
import { GiveOrder } from "@/components/order/giveOrder";
import { MakesOrder } from "@/components/order/makeOrder";
import { Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useData } from "@/context/dataProvider";

export interface formData {
  userId: string;
  foods: string[];
  address: string;
  nemelt: string;
}
function Order() {
  const [formData, setFormData] = useState<formData>({
    userId: "",
    foods: [],
    address: "",
    nemelt: "",
  });

  const handleSubmit = async () => {
    try {
      // const response = await axios.post(
      //   "http://localhost:8000/order",
      //   formData
      // );
      console.log(formData);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  const { userData } = useData();
  console.log(userData?._id);

  const handleInputChange = (inputData: Partial<formData>) => {
    if ("userId" in inputData && userData?._id) {
      setFormData({ ...formData, userId: userData?._id });
    } else {
      setFormData({ ...formData, ...inputData });
    }
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
        <GiveOrder handleSubmit={handleSubmit} />
      </div>
    </Stack>
  );
}

export default Order;

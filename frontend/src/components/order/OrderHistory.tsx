import React from "react";
import { Stack } from "@mui/material";
import { OrderHi } from "./orderHi";
import { OrderDetail } from "./orderDetail";

type Food = {
  amount: number;
  _id: string;

  name: string;
  image: string;
  ingredients: string;
  price: string;
};
type Fo = {
  foods: Food[];
};
type PropsType = {
  data: Fo[];
};

export const History = async (props: PropsType) => {
  const { data } = props;

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "180px",
        padding: "100px 0px",
      }}
    >
      <OrderHi data={data} />
      <OrderDetail data={data} />
    </Stack>
  );
};

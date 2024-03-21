import React from "react";
import { Stack, Box } from "@mui/material";

import Image from "next/image";
type PropsType = {
  zurag: any;
  text: string;
  une: string;
};
export const Details = (props: PropsType) => {
  const { zurag, text, une } = props;
  return (
    <Stack
      sx={{
        width: "400px",
        height: "380px",

        // flexBasis: 300,
        justifyContent: "space-around",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Image
        alt=""
        src={zurag}
        width={358}
        height={255}
        style={{ borderRadius: "16px", boxShadow: "10px 20px 25px #D6D8DB" }}
      />
      <Stack sx={{}}>
        <Stack
          sx={{
            fontSize: "25px",
            fontFamily: "sans-serif",
            fontWeight: "semi-bold",
            marginBottom: "7px",
          }}
        >
          {text}
        </Stack>
        <Stack
          sx={{
            fontSize: "25px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "#18BA51",
          }}
        >
          {une}₮
        </Stack>
      </Stack>
    </Stack>
  );
};

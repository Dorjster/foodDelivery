import React from "react";
import { Stack, Box } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";

type PropsType = {
  icon: any;
  text1: string;
  text2: string;
};
export const Detail = (props: PropsType) => {
  const { icon, text1, text2 } = props;
  return (
    <Stack
      sx={{
        width: "290px",
        height: "165px",

        flexBasis: 300,
        borderRadius: "16px",
        boxShadow: "5px 5px 25px #D6D8DB",
        padding: "20px 20px",
        gap: "50px",
      }}
    >
      <Stack
        sx={{
          color: "green",
          fontSize: "60px",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        {icon}
      </Stack>
      <Stack sx={{ gap: "10px" }}>
        <Box
          sx={{
            fontSize: "24px",
            fontFamily: "sans-serif",
            fontWeight: "semi-bold",
            display: "flex",
            gap: "40px",
          }}
        >
          {text1}
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            fontFamily: "sans-serif",
            color: "gray",
            marginTop: "5px",
          }}
        >
          {text2}
        </Box>
      </Stack>
    </Stack>
  );
};

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";

export const Deatch = () => {
  const data = [
    {
      icon: (
        <AutoStoriesOutlinedIcon sx={{ fontSize: "35px", color: "#18BA51" }} />
      ),
      text1: "Хүргэлтийн төлөв хянах",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: (
        <AccessTimeOutlinedIcon sx={{ fontSize: "35px", color: "#18BA51" }} />
      ),
      text1: "Шуурхай хүргэлт",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <RiceBowlIcon sx={{ fontSize: "35px", color: "#18BA51" }} />,
      text1: "Эрүүл, баталгаат орц",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: (
        <AutoStoriesOutlinedIcon sx={{ fontSize: "35px", color: "#18BA51" }} />
      ),
      text1: "Хоолны өргөн сонголт",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        width: "98%",
        alignItems: "center",
        gap: "82px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {data?.map((el, index) => (
        <div key={index} style={{}}>
          <Detail icon={el.icon} text1={el.text1} text2={el.text2} />
        </div>
      ))}
    </Stack>
  );
};

import React from "react";
import { Stack, Box } from "@mui/material";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import Image from "next/image";
type PropsType = {
  zurag: any;
  text: string;
  salePrice: string;
  mainPrice: string;
};
export const Detail = (props: PropsType) => {
  const { zurag, text, salePrice, mainPrice } = props;
  return (
    <Stack
      justifyContent="center"
      sx={{
        width: "400px",
        height: "425px",

        flexBasis: 300,
      }}
    >
      <Image
        alt=""
        src={zurag}
        width={410}
        height={285}
        // style={{ boxShadow: "10px 10px 45px #D6D8DB" }}
      />
      <Stack>
        <Stack
          sx={{
            fontSize: "23px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginLeft: "20px",
            marginBottom: "20px",
          }}
        >
          {text}
        </Stack>
        <Stack direction="row" sx={{ gap: "20px", marginLeft: "20px" }}>
          <Box
            sx={{
              fontSize: "25px",
              fontFamily: "sans-serif",
              fontWeight: "semi-bold",
              color: "#18BA51",
            }}
          >
            {salePrice}₮
          </Box>{" "}
          <Box
            sx={{
              fontSize: "25px",
              fontFamily: "sans-serif",
              fontWeight: "400px",
              textDecorationLine: "line-through",
              color: "grey",
            }}
          >
            {mainPrice}₮
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
// import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Offsale = () => {
  const moc = [
    {
      zurag: "/image1.png",
      text: "Өглөөний хоол",
      salePrice: "22,800",
      mainPrice: "26,000",
    },
    {
      zurag: "/image1.png",
      text: "Өглөөний хоол",
      salePrice: "22,800",
      mainPrice: "26,000",
    },
    {
      zurag: "/image1.png",
      text: "Өглөөний хоол",
      salePrice: "22,800",
      mainPrice: "26,000",
    },
    {
      zurag: "/image1.png",
      text: "Өглөөний хоол",
      salePrice: "22,800",
      mainPrice: "26,000",
    },
  ];
  return (
    <Stack
      sx={{
        padding: "20px 30px",
        alignItems: "center",
        direction: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "92%",
          marginBottom: "30px",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "76%",
            marginLeft: "80px",
          }}
        >
          <Box>
            <Image alt="" src="/Star 1.png" width={35} height={35} />
          </Box>
          <Box
            sx={{
              fontSize: "30px",
              fontFamily: "sans-serif",
              fontWeight: "semi-bold",
            }}
          >
            Хямдралтай
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            fontFamily: "sans-serif",
            color: "#18BA51",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          Бүгдийг харах
          <ArrowForwardIosIcon />
        </Box>
         
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          gap: "80px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {moc?.map((el, index) => (
          <div key={index}>
            <Detail
              zurag={el.zurag}
              text={el.text}
              salePrice={el.salePrice}
              mainPrice={el.mainPrice}
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

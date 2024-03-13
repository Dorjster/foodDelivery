"use client";
import React from "react";
import Image from "next/image";
import { Stack, Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { CenterFocusStrong } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "545px",
        position: "relative",
        backgroundImage: "url(/foo.png)",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          height: "322px",
          width: "80%",
          top: "50%",
          left: "50%",

          transform: "translate(-50%, -50%)",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            paddingBottom: "50px",
            borderBottom: " 1px solid white",
            width: "100%",
            display: "flex",

            alignItems: "center",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "sans-serif",
              gap: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image src="/log.png" alt="logo" width={32} height={26} />
            <Box>Food Delivery</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              color: "white",
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            <Box
              sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
              Нүүр{" "}
            </Box>
            <Box
              sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
              Холбоо барих
            </Box>
            <Box
              sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
              Хоолны цэс
            </Box>
            <Box
              sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
              Үйлчилгээний нөхцөл
            </Box>
            <Box
              sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
              Хүргэлтийн бүс
            </Box>
            <Box
              sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
            >
              Нууцлалын бодлого
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              flexDirection: "row",
            }}
          >
            <FacebookOutlinedIcon sx={{ color: "white", fontSize: "40px" }} />
            <InstagramIcon sx={{ color: "white", fontSize: "40px" }} />
            <TwitterIcon sx={{ color: "white", fontSize: "40px" }} />
          </Box>
        </Stack>
        <Stack
          sx={{
            color: "white",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          <Box>© 2024 Pinecone Foods LLC </Box>{" "}
          <Box sx={{ fontWeight: "100" }}>
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

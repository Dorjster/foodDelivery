"use client";
import React, { ChangeEvent, useState } from "react";
import { Stack, Box, Button } from "@mui/material";
import axios from "axios";

export const PasswordRec = () => {
  const [userdata, setUserdata] = useState({});
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const handleClick = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/forgot-password",
        userdata
      );
      console.log(data);
      if (data === "User not found") {
        setError("User not found");
      } else {
        setError(null);
      }
    } catch (err: any) {
      console.error(err.response.data);
      setError(err.response.data);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", width: "100vw" }}
    >
      <Stack
        sx={{
          width: "448px",
          height: "297px",
          gap: "48px",
          fontFamily: "sans-serif",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Нууц үг сэргээх
        </Box>
        <Stack sx={{ gap: "10px", position: "relative" }}>
          <input
            type="text"
            placeholder="Имэйл хаягаа оруулна уу"
            name="email"
            onChange={handleChange}
            style={{
              width: "95%",
              height: "50px",
              fontSize: "17px",
              paddingLeft: "20px",
            }}
          />
          {error && (
            <Box
              sx={{
                color: "red",

                width: "100%",
                textAlign: "center",
                position: "absolute",
                top: "68px",
                marginBottom: "-48px",
              }}
            >
              {error}
            </Box>
          )}
        </Stack>
        <Stack alignItems={"center"} sx={{ gap: "32px" }}>
          <Button
            onClick={handleClick}
            variant="outlined"
            sx={{
              height: "48px",
              width: "100%",
              backgroundColor: "#EEEFF2",
              color: "#1C20243D",
              border: "none",
              cursor: "pointer",
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

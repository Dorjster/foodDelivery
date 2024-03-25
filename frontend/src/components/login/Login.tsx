"use client";
import React, { ChangeEvent, useEffect } from "react";
import { Stack, Box, Paper, InputBase, Button } from "@mui/material";
import { InputField } from "../signup/Input";
import { InputPass } from "../signup/InputP";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useData } from "../../context/dataProvider";
export const Login = () => {
  const { userData } = useData();
  const [userdata, setUserdata] = useState({});
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setUserdata({ ...userdata, [name]: value });
  };

  useEffect(() => {
    if (userData) {
      push("/");
    }
  }, [userData, push]);

  const handleClick = async () => {
    try {
      const { data } = await axios.post(
        "https://fooddelivery-pg8c.onrender.com/login",
        userdata
      );
      if (data === "User not found") {
        setError("User not found");
      } else if (data === "Incorrect email or password") {
        setError("Incorrect email or password");
      } else {
        setError("");

        localStorage.setItem(`tokenFood`, data);
        push("/");
      }
    } catch (err: any) {
      console.log(err.response.data);
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
          height: "497px",
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
          Нэвтрэх
        </Box>
        <Stack sx={{ gap: "10px", position: "relative" }}>
          <InputField
            placeHolder="Имэйл хаягаа оруулна уу"
            text="Имэйл"
            name="email"
            onchange={(el: ChangeEvent<HTMLInputElement>) => handleChange(el)}
          />
          <InputPass
            text="Нууц үг"
            name="password"
            onchange={(e) => handleChange(e)}
          />
          <Button
            onClick={() => push("/recoverPassword")}
            sx={{
              width: "40%",
              fontSize: "10x",
              textAlign: "start",
              cursor: "pointer",
              display: "flex",
              alignSelf: "flex-end",
              color: "black",
            }}
          >
            Forgot password?
          </Button>
          {error && (
            <Box
              sx={{
                color: "red",
                width: "100%",
                textAlign: "center",
                position: "absolute",
                bottom: "-34px",
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
            Нэвтрэх
          </Button>
          <Box>Эсвэл</Box>
          <Button
            onClick={() => push("/signup")}
            variant="outlined"
            sx={{
              height: "48px",
              width: "100%",
              backgroundColor: "white",
              border: "1px solid ",
              borderColor: "#18BA51",
              color: "black",
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

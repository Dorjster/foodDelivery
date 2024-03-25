"use client";

import React, { ChangeEvent, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Stack, Button, Checkbox, colors } from "@mui/material";
import { InputField } from "./Input";
import { InputPass } from "./InputP";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useData } from "../../context/dataProvider";

type fieldsType = {};

const fields = [
  { title: "Нэр", name: "name", placeHolder: "Нэрээ оруулна уу" },
  { title: "И-Мэйл", name: "email", placeHolder: "И-мэйл хаягаа оруулна уу" },
  { title: "Утас", name: "phone", placeHolder: "Дугаараа оруулна уу" },
];
const fieldForPassword = [
  { title: "Нууц үг", name: "password", placeHolder: "Нууц үгээ оруулна уу" },
  {
    title: "Нууц үг давтах",
    name: "password2",
    placeHolder: "Нууц үгээ оруулна уу",
  },
];

type stateType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  password2: string;
};
export const SignUp = () => {
  const { userData } = useData();

  const [userdata, setUserdata] = useState<stateType>({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState<string>();
  const { push } = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };

  useEffect(() => {
    if (userData) {
      push("/");
    }
  }, [userData, push]);

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      const emptyFields = Object.entries(userdata).filter(
        ([key, value]) => !value.trim()
      );
      if (emptyFields.length > 0) {
        setError("Please fill in all fields");
      } else {
        if (userdata.password !== userdata.password2) {
          setError("Passwords do not match");
        }
        const { data } = await axios.post(
          "https://fooddelivery-pg8c.onrender.com/signup",
          userdata
        );
        console.log(data);
        push("/");
      }
    } catch (err: any) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <Stack sx={{}}>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh", width: "100vw" }}
      >
        <Grid
          sx={{
            height: "722px",
            width: "448px",
            paddingBottom: "32px",
            paddingTop: "32px",
            gap: "50px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              fontSize: "28px",
              fontWeight: "700px",
              fontFamily: "sans-serif",
            }}
          >
            Бүртгүүлэх
          </Box>
          <Grid
            sx={{
              marginTop: "50px",
            }}
          >
            {fields.map((field, index) => (
              <InputField
                key={index}
                placeHolder={field.placeHolder}
                text={field.title}
                name={field.name}
                onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            ))}
            {fieldForPassword.map((field, index) => (
              <InputPass
                key={index}
                text={field.title}
                name={field.name}
                onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            ))}
          </Grid>
          <Stack>
            {error && (
              <Box
                sx={{
                  position: "absolute",
                  textAlign: "center",
                  color: "red",
                  width: "100%",
                  fontFamily: "sans-serif",
                }}
              >
                {error}
              </Box>
            )}
          </Stack>
          <Stack sx={{ marginTop: "60px" }}>
            <Box sx={{ fontFamily: "sans-serif" }}>
              <Checkbox />
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Box>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{
                height: "48px",
                backgroundColor: "#18BA51",
                marginTop: "30px",
              }}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

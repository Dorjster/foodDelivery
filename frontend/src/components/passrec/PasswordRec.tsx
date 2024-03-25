"use client";
import React, { ChangeEvent, useState } from "react";
import { Stack, Box, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

interface UserData {
  email: string;
  otp: string;
  newPassword: string;
}

export const PasswordRec = () => {
  const { push } = useRouter();
  const [page, setPage] = useState(1);
  const [userdata, setUserdata] = useState<UserData>({
    email: "",
    otp: "",
    newPassword: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const handleSendOTP = async () => {
    try {
      const { data } = await axios.post<string>(
        "https://fooddelivery-pg8c.onrender.com/forgot-password",
        { email: userdata.email }
      );
      console.log(data);
      if (data === "User not found") {
        setError("User not found");
      } else {
        setError(null);
        setPage(2);
      }
    } catch (err: any) {
      console.error(err.response.data);
      setError(err.response.data);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const { data } = await axios.post<string>(
        "https://fooddelivery-pg8c.onrender.com/check-code",
        { email: userdata.email, code: userdata.otp }
      );
      console.log(data);
      if (data === "success") {
        setError(null);
        setPage(3);
      } else {
        setError("Invalid OTP code");
      }
    } catch (err: any) {
      console.error(err.response.data);
      setError(err.response.data);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const { data } = await axios.post<string>(
        "https://fooddelivery-pg8c.onrender.com/updatePass",
        { email: userdata.email, password: userdata.newPassword }
      );
      console.log(data);

      alert("Password updated successfully!");
      push("/login");
    } catch (err: any) {
      console.error(err.response.data);
      setError(err.response.data);
    }
  };

  const handleBack = () => {
    setPage(page - 1);
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
        {page === 1 && (
          <>
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
                value={userdata.email}
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
            <Button
              onClick={handleSendOTP}
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
          </>
        )}
        {page === 2 && (
          <>
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              ОТР код оруулна уу
            </Box>
            <Stack sx={{ gap: "10px", position: "relative" }}>
              <input
                type="text"
                placeholder="ОТР код оруулна уу"
                name="otp"
                value={userdata.otp}
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
            <Button
              onClick={handleVerifyOTP}
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
              Дараах
            </Button>
          </>
        )}
        {page === 3 && (
          <>
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Шинэ нууц үг хийх
            </Box>
            <Stack sx={{ gap: "10px", position: "relative" }}>
              <input
                type="password"
                placeholder="Шинэ нууц үг"
                name="newPassword"
                value={userdata.newPassword}
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
            <Button
              onClick={handleUpdatePassword}
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
              Нууц үг солих
            </Button>
          </>
        )}
        {page !== 1 && (
          <Button
            onClick={handleBack}
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
            Буцах
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

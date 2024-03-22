"use client";
import axios from "axios";

import { Stack } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState, useEffect, ChangeEvent } from "react";
import { formData } from "@/app/order/page";

interface InputsFieldsProps {
  onInputChange: (inputData: Partial<formData>) => void;
}

export const InputsFields: React.FC<InputsFieldsProps> = ({
  onInputChange,
}) => {
  const [search, setSearch] = useState(false);
  const [choose, setChoose] = useState("");
  const [value, setInput] = useState("");
  const [address, setAddress] = useState<any[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const url = `https://z4ryw4kny0.execute-api.ap-southeast-1.amazonaws.com/production/searchByAddress?address=`;

  const fetchAddress = async (i: string) => {
    try {
      const response = await axios.get(`${url}${i}`);

      setAddress(response.data.data);
      return;
    } catch (error: any) {}
  };
  const handleClick = (i: string) => {
    setChoose(i);
    setInput(i);

    onInputChange({ address: i });

    setSearch(false);
  };

  useEffect(() => {
    fetchAddress(value);
  }, [value]);

  useEffect(() => {
    if (value.length > 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [value]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value: inputValue } = e.target;

    if (name === "address") {
      setChoose(inputValue);
      setSearch(false);
    } else if (name === "nemelt") {
      setAdditionalInfo(inputValue);
      onInputChange({ nemelt: inputValue });
    }
  };

  return (
    <Stack
      sx={{
        padding: "24px",
        width: "432px",
        gap: "30px",
        boxShadow: "0px 0px 20px 0px #0000000D",
        paddingX: "30px",
      }}
    >
      <Stack sx={{ gap: "16px" }}>
        <div style={{ fontFamily: "sans-serif" }}>Хаяг аа оруулна уу</div>
        <div
          style={{
            position: "relative",
            height: "40px",
            width: "90%",
            display: "flex",
            backgroundColor: "#F7F7F8",
            alignItems: "center",
            borderRadius: "6px",
            paddingLeft: "20px",
            gap: "10px",
          }}
        >
          <LocationOnIcon style={{ color: "#3c3c3c" }} />
          <input
            name="address"
            value={value}
            onChange={(e) => {
              setInput(e.target.value), handleInputChange(e);
            }}
            // onChange={handleInputChange}
            placeholder="Дүүрэг"
            style={{
              backgroundColor: "#F7F7F8",
              border: "none",
              outline: "none",
              width: "70%",
            }}
          />{" "}
          {search && (
            <div
              style={{
                top: "100%",
                position: "absolute",
                zIndex: "1",
                height: "384px",
                width: "100%",
                right: "0%",
                overflow: "scroll",
                backgroundColor: "white",
                boxShadow: "10px 3px 20px #F7F7F8",
                fontFamily: "sans-serif",
                color: "",
              }}
            >
              {address.length > 0 &&
                address?.map((el, i: number) => {
                  return (
                    <div
                      style={{ display: "flex" }}
                      key={i}
                      id={i.toString()}
                      onClick={() => {
                        handleClick(el.full_address);
                      }}
                    >
                      <LocationOnIcon style={{ color: "gray" }} />
                      <div
                        id={`loc${i}`}
                        style={{ color: "gray", marginBottom: "20px" }}
                      >
                        {el.full_address}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </Stack>
      <Stack sx={{ gap: "16px" }}>
        <div style={{ fontFamily: "sans-serif" }}>Нэмэлт мэдээлэл</div>
        <div
          style={{
            position: "relative",
            height: "100px",
            width: "90%",
            display: "flex",
            backgroundColor: "#F7F7F8",
            alignItems: "center",
            borderRadius: "6px",
            paddingLeft: "20px",
            gap: "10px",
          }}
        >
          <textarea
            name="nemelt"
            value={additionalInfo}
            onChange={handleInputChange}
            placeholder="нэмэлт"
            style={{
              backgroundColor: "#F7F7F8",
              border: "none",
              outline: "none",
              width: "80%",
              height: "90px",
            }}
          />
        </div>
      </Stack>
      <Stack sx={{ gap: "16px" }}>
        <div style={{ fontFamily: "sans-serif" }}>Утасны дугаар</div>
        <div
          style={{
            position: "relative",
            height: "40px",
            width: "90%",
            display: "flex",
            backgroundColor: "#F7F7F8",
            alignItems: "center",
            borderRadius: "6px",
            paddingLeft: "20px",
            gap: "10px",
          }}
        >
          <input
            placeholder="Утас"
            style={{
              backgroundColor: "#F7F7F8",
              border: "none",
              outline: "none",
              width: "80%",
            }}
          />
        </div>
      </Stack>
    </Stack>
  );
};

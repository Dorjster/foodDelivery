"use client";
import { Stack, Button, Radio } from "@mui/material";
import { Order } from "../basket/getBasket";
import { useEffect, useState } from "react";

export const GiveOrder = (props: any) => {
  const { handleSubmit, updatePrice } = props;
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const TotalPrice = totalPrice.toString();

  useEffect(() => {
    // Function to add commas to the last three digits of a number string
    const addCommaToLastThreeDigits = (numberString: string): string => {
      const length = numberString.length;
      const lastThreeDigits = numberString.substring(length - 3);
      const remainingDigits = numberString.substring(0, length - 3);
      return remainingDigits + "," + lastThreeDigits;
    };

    const formattedPrice = addCommaToLastThreeDigits(totalPrice.toString());

    updatePrice(formattedPrice);
  }, [totalPrice, updatePrice]);

  return (
    <Stack
      sx={{
        fontFamily: "sans-serif",
        width: "432px",

        boxShadow: "0px 0px 20px 0px #0000000D",

        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "blue", fontSize: "70px" }}>
          <Radio color="primary" style={{ width: "80px", height: "80px" }} />
        </div>

        <Stack>
          <div style={{ color: "grey", fontSize: "15px" }}>Алхам 2</div>
          <div style={{ fontSize: "20px" }}>Захиалга баталгаажуулах</div>
          <div style={{ color: "#0468C8", fontSize: "16px" }}>
            Хүлээгдэж байна
          </div>
        </Stack>
      </div>

      <Stack
        sx={{
          width: "100%",
          height: "360px",
          padding: "10px",
          overflow: "scroll",
        }}
      >
        <Order setTotalPrice={setTotalPrice} />
      </Stack>
      <Stack
        direction="row"
        sx={{
          marginBottom: "4px",
          width: "100%",

          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
            marginTop: "50px",
          }}
        >
          <div>Нийт төлөх дүн</div>
          <div style={{ fontWeight: "bold", color: "#18BA51" }}>
            {" "}
            {totalPrice}₮
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#18BA51",
            color: "white",
            padding: "10px 40px",
            marginTop: "50px",
          }}
        >
          Захиалга хийх
        </Button>
      </Stack>
    </Stack>
  );
};

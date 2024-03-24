"use client";

import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Button, Grid, Drawer } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useRouter } from "next/navigation";
import { SearchContext } from "../../context/search";
import { useData } from "../../context/dataProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { BasketContext } from "@/context/basket";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Order } from "../basket/getBasket";

export const HeaderRight = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { push } = useRouter();
  const { userData } = useData();
  const { search, setSearch } = useContext(SearchContext);
  const { basket, setBasket } = useContext(BasketContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const TotalPrice = totalPrice.toString();
  function addCommaToLastThreeDigits(numberString: string): string {
    const length = numberString.length;
    const lastThreeDigits = numberString.substring(length - 3);
    const remainingDigits = numberString.substring(0, length - 3);

    return remainingDigits + "," + lastThreeDigits;
  }
  const price = addCommaToLastThreeDigits(TotalPrice);

  const handlePush = () => {
    push("/login");
  };

  const handler = () => {
    if (search === "") {
      push("/");
    } else {
      push(`/search?id=${search}`);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleBuy = () => {
    if (!userData) {
      alert(
        "Please make sure login first then buy something you dumbass bitch"
      );
      setIsDrawerOpen(false);
      push("/login");
      return;
    }
    setIsDrawerOpen(false);
    push("/order");
  };
  return (
    <Grid
      sx={{
        width: "fit-content",
        display: "flex",
        gap: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        variant="outlined"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          borderRadius: "8px",
          borderColor: "black",
          marginTop: "20px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="search" onClick={handler}>
          <Search />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Хайх "
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "38px",
          display: "flex",
          fontSize: "17px",
          gap: "10px",
          fontFamily: "sans-serif",
          marginTop: "20px",
          fontWeight: "700px",
        }}
      >
        <Button
          onClick={toggleDrawer}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "black",
          }}
        >
          {" "}
          <ShoppingCartIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
          <Box>Сагс</Box>
        </Button>
      </Stack>
      {userData ? (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            width: "38px",
            cursor: "pointer",
            marginLeft: "20px",
            display: "flex",
            fontSize: "17px",
            gap: "10px",
            fontFamily: "sans-serif",
            marginTop: "20px",
            fontWeight: "700px",
          }}
        >
          <PersonIcon sx={{ fontSize: "30px" }} />
          <Button
            onClick={() => {
              push("/userProfile");
            }}
            sx={{
              fontWeight: "700px",
              color: "black",
              padding: "5px",
              width: "100px",
            }}
          >
            {" "}
            {userData.name}
          </Button>
        </Stack>
      ) : (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            width: "38px",
            cursor: "pointer",
            marginLeft: "20px",
            display: "flex",
            fontSize: "17px",
            gap: "10px",
            fontFamily: "sans-serif",
            marginTop: "20px",
            fontWeight: "700px",
          }}
        >
          <PersonOutlineIcon sx={{ fontSize: "30px" }} />
          <Button
            onClick={handlePush}
            sx={{ fontWeight: "400", color: "black", padding: "5px" }}
          >
            Нэвтрэх
          </Button>
        </Stack>
      )}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 650, padding: "20px" }}>
          <Stack
            direction="row"
            sx={{
              margin: "30px",
              padding: "30px 0px",
              borderBottom: "1px solid black",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "150px",
                fontFamily: "sans-serif",
              }}
            >
              Таны сагс
            </div>
          </Stack>

          <Stack
            sx={{ height: "80%", overflowY: "scroll", margin: "10px 30px" }}
          >
            <Order setTotalPrice={setTotalPrice} />
          </Stack>

          <Stack
            direction="row"
            sx={{
              width: "100%",
              padding: "40px 0px",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
              }}
            >
              <div>Нийт төлөх дүн</div>
              <div style={{ fontWeight: "bold", color: "#18BA51" }}>
                {price}₮
              </div>
            </div>
            <Button
              onClick={handleBuy}
              sx={{
                backgroundColor: "#18BA51",
                color: "white",
                padding: "10px 40px",
              }}
            >
              Захиалах
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Grid>
  );
};

import { Stack, Box } from "@mui/material";
import axios from "axios";

import { Food } from "./Food";
import Image from "next/image";
import { AllFoods } from "@/app/page";

// const AllFoods = async () => {
//   try {
//     const { data } = await axios.get<FoodType[]>("http://localhost:8000/foods");

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

type OpenModelType = {
  handleOpen: () => void;
};
type All = {
  data: FoodType[];
};
export const Foods = async (props: OpenModelType) => {
  const data = await AllFoods();
  return (
    <Stack
      sx={{
        padding: "20px 30px",
        direction: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {/*  */}
      <Stack
        direction="row"
        sx={{
          gap: "30px",
          alignItems: "center",
          direction: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Food foods={data as FoodType[]} />
      </Stack>
    </Stack>
  );
};

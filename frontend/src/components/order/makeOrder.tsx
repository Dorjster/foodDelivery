import { Radio, Stack } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState, useEffect } from "react";
import { InputsFields } from "./Input";
interface MakesOrderProps {
  onFormChange: (formData: FormData) => void;
}
export const MakesOrder = () => {
  //   const [formData, setFormData] = useState<FormData>({
  //     userId: "",
  //     foods: [],
  //     address: "",
  //     nemelt: "",
  //   });

  //   const handleInputChange = (inputData: Partial<FormData>) => {
  //     const newFormData = { ...formData, ...inputData };
  //     setFormData(newFormData);
  //     onFormChange(newFormData);
  //   };
  return (
    <Stack
      sx={{
        width: "432px",
        padding: "30px",
        boxShadow: "0px 0px 20px 0px #0000000D",
      }}
    >
      <Stack
        direction="row"
        sx={{
          fontFamily: "sans-serif",
          width: "432px",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div style={{ color: "blue", fontSize: "70px" }}>
          <Radio color="primary" style={{ width: "80px", height: "80px" }} />
        </div>

        <Stack>
          <div style={{ color: "grey", fontSize: "15px" }}>Алхам 1</div>
          <div style={{ fontSize: "20px" }}>Хаягийн мэдээлэл оруулах</div>
          <div style={{ color: "#0468C8", fontSize: "16px" }}>
            Хүлээгдэж байна
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

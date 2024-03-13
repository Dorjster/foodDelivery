"use client";

import Image from "next/image";

import { Grid, Box, Stack } from "@mui/material";
import { Deatch } from "@/components/homep/Detail";
import { Offsale } from "@/components/homep/Offsale";
import { Foods } from "@/components/homep/foods";

export default function Home() {
  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack>
        <Stack
          sx={{
            width: "100vw",
            height: "1060px",
            position: "relative",
            marginTop: "40px",
          }}
        >
          <Image src="/home.png" alt="" layout="fill" />
        </Stack>
        <div
          style={{
            padding: "120px 0",
            gap: "90px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Deatch />
          <Offsale />
          <Foods title="Үндсэн хоол" />
          <Foods title="Салад ба зууш" />
          <Foods title="Амттан" />
        </div>
      </Stack>
    </Stack>
  );
}

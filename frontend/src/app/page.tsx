"use client";

import Image from "next/image";

import { Grid, Box, Stack } from "@mui/material";
import { Deatch } from "@/components/homep/Detail";
import { Offsale } from "@/components/homep/Offsale";
import { Foods } from "@/components/homep/Foods";
import React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Stack>
        <Stack
          sx={{
            width: "100vw",
            height: "860px",
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
          <Foods handleOpen={handleOpen} />
        </div>
      </Stack>
    </Stack>
  );
}

import React, { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography, Slider, Button, Stack } from "@mui/material";
import ColorPicker from "../src/ColorPicker";

const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const ImageWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    order: 2,
  },
}));

const PanelWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    order: 1,
  },
}));

const ImageElement = styled(Image)({
  width: "40vw",
  height: "auto",
});

const PanelPaper = styled(Paper)({
  padding: "16px",
  textAlign: "center",
  color: "#333",
  backgroundColor: "#e8e8e8",
  variant: "outlined",
});

const SliderWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const SliderLabel = styled(Typography)({
  marginRight: "16px",
});

const Title = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "16px",
});

export default function Home() {
  const startingColor: string = "#d05353";

  const handleReset = () => {
    console.log("reset");
  };

  const logColor = (color: string): void => {
    console.log(color);
  };

  return (
    <Root>
      <Grid container spacing={3} direction={{xs: "column", md: "row"}}>
        <PanelPaper>
          <ImageWrapper item xs={"auto"}>
            <ImageElement
              src="/design_final.png"
              alt="guitar"
              width={500}
              height={500}
            />
          </ImageWrapper>
        </PanelPaper>
        <PanelWrapper item xs={12} md={6}>
          <PanelPaper>
            <Title variant="h5" gutterBottom>
              Edit Colors
            </Title>
            <Stack spacing={2}>
              <PanelPaper>
                <Stack direction="row" alignItems="center">
                  <Stack direction="row" alignItems="center">
                    <Typography>Subsection 1:</Typography>
                    <ColorPicker onChange={logColor} color={startingColor} />
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Typography>Subsection 1:</Typography>
                    <ColorPicker onChange={logColor} color={startingColor} />
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Typography>Subsection 1:</Typography>
                    <ColorPicker onChange={logColor} color={startingColor} />
                  </Stack>
                </Stack>
              </PanelPaper>

              <PanelPaper>
              <Stack direction="row" alignItems="center">
                <Typography>Section 3:</Typography>
                <ColorPicker onChange={logColor} color={startingColor} />
              </Stack>
              </PanelPaper>
              
              <PanelPaper>
              <Stack direction="row" alignItems="center">
                <Typography>Section 4:</Typography>
                <ColorPicker onChange={logColor} color={startingColor} />
              </Stack>
              </PanelPaper>
              <PanelPaper>
              <Stack direction="row" alignItems="center">
                <Typography>Section 5:</Typography>
                <ColorPicker onChange={logColor} color={startingColor} />
              </Stack>
              </PanelPaper>
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Stack>
          </PanelPaper>
        </PanelWrapper>
      </Grid>
    </Root>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import AudioData from "../Molecules/AudioData";
import AdvanceDalay from "../Molecules/AdvanceDelay";
import PausePlay from "../Molecules/PausePlay";
import Volume from "../Molecules/Volume";

const Widget = styled("div")(() => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  marginTop: "1rem",
  position: "relative",
  zIndex: 1,
}));

export default function MusicPlayerSlider() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget>
        <AudioData />
        <AdvanceDalay />
        <PausePlay />
        <Volume />
      </Widget>
    </Box>
  );
}

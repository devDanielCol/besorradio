import * as React from "react";
import RadioIcon from "@mui/icons-material/Radio";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const AudioData = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CoverImage
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RadioIcon sx={{ width: 40, height: 40 }} />
        </CoverImage>
        <Box sx={{ ml: 1.5, minWidth: 0 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            Besorradio
          </Typography>
          <Typography noWrap>Programación en vivo</Typography>
          <Typography noWrap letterSpacing={-0.25}>
            Al Aire
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AudioData;

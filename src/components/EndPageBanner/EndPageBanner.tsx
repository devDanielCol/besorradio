import * as React from "react";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
const EndPageBanner = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: 2,
        }}
      >
        <IconButton href="#">
          <KeyboardDoubleArrowUpRoundedIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default EndPageBanner;

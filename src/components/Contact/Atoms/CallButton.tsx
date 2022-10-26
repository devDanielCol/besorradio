import * as React from "react";
import { Box, Button } from "@mui/material";
import gradients from "../../../utils/colors/gradients";

const CallButton = () => {
  return (
    <Box
      sx={{
        p: 0.1,
        backgroundImage: gradients.orangeYellow,
        width: "fit-content",
        boxShadow: "",
        borderRadius: 2,
      }}
    >
      <Button
        variant="outlined"
        sx={{
          background: "black",
          color: "primary",
          width: 200,
          textTransform: "capitalize",
          fontWeight: 800,
          fontSize: "1rem",
          borderRadius: 2,
          "&:hover": {
            color: "white",
          },
        }}
      >
        Llamar
      </Button>
    </Box>
  );
};

export default CallButton;

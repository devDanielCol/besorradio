import * as React from "react";
import { Box } from "@mui/material";
import gradients from "../../../utils/colors/gradients";

interface IProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  step?: number;
  gradient?: string;
}

const Steps: React.FC<IProps> = ({
  leftContent,
  rightContent,
  step,
  gradient,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "49.75%",
            minHeight: 100,
            padding: 1.5,
          }}
        >
          {leftContent}
        </Box>
        <Box
          sx={{
            width: "1px",
            backgroundImage: gradient || gradients.blueLightBlue,
            minHeight: 100,
          }}
        ></Box>
        <Box
          sx={{
            width: "49.75%",
            minHeight: 100,
            padding: 1.5,
          }}
        >
          {rightContent}
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "50%",
          height: 30,
          width: 30,
          backgroundImage: gradient || gradients.blueLightBlue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 800,
          color: "white",
        }}
      >
        {step}
      </Box>
    </Box>
  );
};

export default Steps;

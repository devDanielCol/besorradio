import * as React from "react";
import { Card, SxProps } from "@mui/material";
import { Box } from "@mui/system";

const ProgramCard = () => {
  const [rotate, setRotate] = React.useState<boolean>(false);
  const rotateFront = rotate ? "180deg" : "0deg";
  const rotateBack = rotate ? "360deg" : "180deg";
  const sxCard: SxProps = {
    position: "relative",
    margin: 1,
    height: 80,
    border: 0,
    boxShadow: 0,
    backgroundColor: "transparent",
    transform: `perspective(900px)`,
  };

  const sxFace: SxProps = {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 3,
    backfaceVisibility: "hidden",
    transition: "all .5s cubic-bezier(0.1, 0.57, 0.45, 0.94)",
    backgroundColor: "red",
  };

  const sxFront: SxProps = {
    transform: `perspective(900px) rotateY(${rotateFront})`,
  };
  const sxBack: SxProps = {
    transform: `perspective(900px) rotateY(${rotateBack})`,
  };

  const handleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <Card type-card="program" onClick={handleRotate} sx={sxCard}>
      <Box face-type="front" component="div" sx={{ ...sxFront, ...sxFace }}>
        este es el front
      </Box>
      <Box face-type="back" component="div" sx={{ ...sxBack, ...sxFace }}>
        este es el back
      </Box>
    </Card>
  );
};

export default ProgramCard;

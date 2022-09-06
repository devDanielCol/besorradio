import * as React from "react";
import { SxProps, Typography, IconButton, Paper } from "@mui/material";
import { Box } from "@mui/system";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

const ProgramCard = () => {
  const [rotate, setRotate] = React.useState<boolean>(false);
  const rotateFront = rotate ? "180deg" : "0deg";
  const rotateBack = rotate ? "360deg" : "180deg";
  const sxCard: SxProps = {
    position: "relative",
    width: "100%",
    minWidth: 155,
    height: {
      xs: 210,
      md: 250,
    },
    border: 0,
    boxShadow: 0,
    backgroundColor: "transparent",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
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
    <Box type-card="program" sx={sxCard}>
      <Paper
        elevation={3}
        face-type="front"
        component="div"
        sx={{ ...sxFront, ...sxFace }}
      >
        <WbSunnyIcon
          sx={{
            width: {
              xs: 38,
              md: 50,
            },
            height: {
              xs: 38,
              md: 50,
            },
            mb: 2,
          }}
        />
        <Typography
          onClick={handleRotate}
          sx={{
            fontSize: {
              xs: "1rem",
              md: "1.8rem",
            },
            textAlign: "center",
            maxWidth: "85%",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Una luz en las naciones
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        face-type="back"
        component="div"
        sx={{ ...sxBack, ...sxFace }}
      >
        <Typography
          fontSize={{
            xs: 10,
            md: 12,
          }}
          mb={1}
        >
          ¿Qué es?
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: 12,
              md: 14,
            },
            textAlign: "center",
            maxWidth: "85%",
          }}
        >
          Es un programa en el cual se habla sobre la importancia de predicar y
          extender el mensaje de Dios a todo el mundo.
        </Typography>
        <Box
          mt={{
            xs: 1,
            md: 2,
          }}
        >
          <IconButton>
            <VisibilityRoundedIcon />
          </IconButton>
        </Box>
      </Paper>
      <IconButton
        sx={{ position: "relative", top: 1, left: 1, zIndex: 2 }}
        onClick={handleRotate}
      >
        <AutorenewRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default ProgramCard;

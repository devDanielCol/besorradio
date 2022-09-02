import * as React from "react";
import { Box, IconButton, SxProps, Typography } from "@mui/material";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const sxIcon: SxProps = { width: 100, height: 100 };

const SwiperFirst = () => {
  const [play, setPlay] = React.useState<boolean>(false);

  const playHandler = () => {
    setPlay(!play);
  };

  return (
    <Box
      sx={{ height: { md: 400, xs: 200 } }}
      p={3}
      pl={15}
      color="white"
      display="grid"
      gridTemplateColumns="repeat(2,1fr)"
    >
      <Box>
        <Typography data-swiper-parallax="-300" fontSize={60}>
          BesorRadio
        </Typography>
        <Typography data-swiper-parallax="-100" fontSize={40} mt={4}>
          Una emisora para refrescar tu alma con el torrente del cielo
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton onClick={playHandler}>
          {play ? (
            <PauseCircleIcon sx={sxIcon} />
          ) : (
            <PlayCircleRoundedIcon sx={sxIcon} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default SwiperFirst;

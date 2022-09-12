import * as React from "react";
import { Box, Button, IconButton, SxProps, Typography } from "@mui/material";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useSelector, useDispatch } from "react-redux";
import { IControls, play } from "../../../redux/reducers/controlls";
interface ISelector {
  controllerAudioStream: IControls;
}

const sxIcon: SxProps = {
  width: {
    xs: 50,
    md: 100,
  },
  height: {
    xs: 50,
    md: 100,
  },
  color: "white",
};

const SwiperFirst = () => {
  const dispatch = useDispatch();
  const paused: boolean = useSelector(
    ({ controllerAudioStream }: ISelector) => controllerAudioStream.play
  );

  const playHandler = () => {
    dispatch(play());
  };

  return (
    <Box
      sx={{
        height: { md: 400, xs: 200 },
        position: "relative",
      }}
      p={3}
      pl={{ xs: 6, md: 15 }}
      color="white"
      display="grid"
      gridTemplateColumns="repeat(2,1fr)"
      alignItems={"center"}
    >
      <Box>
        <Typography
          fontWeight={700}
          data-swiper-parallax="-300"
          fontSize={{ xs: 30, md: 60 }}
        >
          BesorRadio
        </Typography>
        <Typography
          data-swiper-parallax="-100"
          fontSize={{ xs: 16, md: 40 }}
          mt={{ xs: 1.5, md: 4 }}
        >
          Una emisora para refrescar tu alma con el torrente del cielo
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton onClick={playHandler}>
          {paused ? (
            <PauseCircleIcon sx={sxIcon} />
          ) : (
            <PlayCircleRoundedIcon sx={sxIcon} />
          )}
        </IconButton>
      </Box>
      {paused && (
        <Button
          color="error"
          variant="contained"
          sx={{
            borderRadius: 2,
            position: "absolute",
            top: 7,
            right: 7,
            textTransform: "capitalize",
          }}
        >
          OnAir
        </Button>
      )}
    </Box>
  );
};

export default SwiperFirst;

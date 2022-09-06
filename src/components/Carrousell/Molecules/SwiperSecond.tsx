import * as React from "react";
import { Box, IconButton, SxProps, Typography } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

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

const SwiperSecond = () => {
  const handlerClick = () => {
    console.log("click to favorite");
  };

  return (
    <Box
      sx={{
        height: { md: 400, xs: 200 },
      }}
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          textAlign="center"
          fontWeight={700}
          data-swiper-parallax="-300"
          fontSize={{ xs: 30, md: 60 }}
        >
          Te va encantar
        </Typography>
        <Typography
          textAlign="center"
          maxWidth={{ xs: "90%", md: "75%" }}
          data-swiper-parallax="-100"
          fontSize={{ xs: 16, md: 40 }}
        >
          La mejor emisora online y la mejor programación, todo junto en mejor
          app que podras encontrar.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton onClick={handlerClick}>
          <FavoriteRoundedIcon sx={sxIcon} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SwiperSecond;

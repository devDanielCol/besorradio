import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import SwiperFirst from "../Molecules/SwiperFirst";
import SwiperSecond from "../Molecules/SwiperSecond";
import { useTheme } from "@mui/material/styles";

const Carrousell = () => {
  const theme = useTheme();

  const src =
    theme.palette.mode === "dark"
      ? "assets/images/studio.jpg"
      : "assets/images/master.jpg";

  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Pagination, Navigation]}
        style={{ color: "white" }}
      >
        <Box
          slot="container-start"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "130%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: "url(assets/images/microphone.jpg)",
            filter: "brightness(50%)",
          }}
          data-swiper-parallax="-23%"
        ></Box>

        <SwiperSlide>
          <SwiperFirst />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSecond />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carrousell;

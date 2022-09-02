import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import SwiperFirst from "../Molecules/SwiperFirst";

const Carrousell = () => {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
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
            backgroundImage: "url(assets/images/studio.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></Box>
        {[0, 1].map((_, index) => (
          <SwiperSlide key={index}>
            <SwiperFirst />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrousell;

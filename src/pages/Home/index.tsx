import * as React from "react";
import Schedules from "../../components/Schedules/Atoms/Schedules";
import Programs from "../../components/Programs/Atoms/Programs";
import BannerStreaming from "../../components/BannerStreaming/BannerStreaming";
import Carrousell from "../../components/Carrousell/Atoms/Carrousell";

const HomePage = () => {
  return (
    <>
      <Carrousell />
      <Schedules />
      <Programs />
      <BannerStreaming />
    </>
  );
};

export default HomePage;

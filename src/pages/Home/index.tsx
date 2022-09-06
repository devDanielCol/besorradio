import * as React from "react";
import Schedules from "../../components/InfoSchedul/Atoms/InfoSchedul";
import Programs from "../../components/Programs/Atoms/Programs";
import Carrousell from "../../components/Carrousell/Atoms/Carrousell";
import EndPageBanner from "../../components/EndPageBanner/EndPageBanner";

const HomePage = () => {
  return (
    <>
      <Carrousell />
      <Schedules />
      <Programs />
      <EndPageBanner />
    </>
  );
};

export default HomePage;

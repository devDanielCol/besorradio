import * as React from "react";
import Schedules from "../../components/Schedules/Atoms/Schedules";
import Programs from "../../components/Programs/Atoms/Programs";
import Carrousell from "../../components/Carrousell/Atoms/Carrousell";

const HomePage = () => {
  return (
    <>
      <Carrousell />
      <Schedules />
      <Programs />
    </>
  );
};

export default HomePage;

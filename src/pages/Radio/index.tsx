import * as React from "react";
import { Box, Card, CardMedia } from "@mui/material";

import PausePlay from "../../components/AudioPlayer/Molecules/PausePlay";
import Volume from "../../components/AudioPlayer/Molecules/Volume";
import AdvanceDalay from "../../components/AudioPlayer/Molecules/AdvanceDelay";

const Radio = () => {
  return (
    <Box
      sx={{
        py: 4,
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${"https://cdn.pixabay.com/photo/2022/08/16/19/23/etretat-7391013_960_720.jpg"})`,
      }}
    >
      <Card
        sx={{
          backdropFilter: "blur(7px)",
          p: 2,
          borderRadius: 3,
          width: 400,
          backgroundColor: "#00000085",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image="https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_960_720.jpg"
          alt="Paella dish"
          sx={{ color: "white", borderRadius: 3, boxShadow: 3 }}
        />

        <AdvanceDalay />
        <PausePlay />
        <Volume />
      </Card>
    </Box>
  );
};

export default Radio;

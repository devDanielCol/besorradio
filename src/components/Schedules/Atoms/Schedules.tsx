import * as React from "react";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import SchedulDaysTab from "../Molecules/SchedulDaysTab";

const Schedules = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "black", color: "white" }}>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography fontSize={"4rem"} color="blue">
            24H
          </Typography>
          <Typography fontSize={"3rem"}>de transmision</Typography>
        </Box>
        <Box
          sx={{ py: 6 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            maxWidth={{ xs: "90%", md: "70%" }}
            textAlign="center"
            fontSize={"1.5rem"}
          >
            Disfruta de 24 horas de transmision seguidas, si anuncios y sin
            publicidad. Programas en directo todos los días, musica y contenido
            edificante para tu vida.
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <SchedulDaysTab></SchedulDaysTab>
        </Box>
      </Container>
    </Box>
  );
};

export default Schedules;

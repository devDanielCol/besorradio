import * as React from "react";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import GradientText from "../../Contact/Atoms/GradientText";
import gradients from "../../../utils/colors/gradients";

const Schedules = () => {
  return (
    <Box sx={{ pt: { xs: 4, md: 10 } }}>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography component="span" sx={{ mr: 1 }}>
            <GradientText
              legend="24h"
              fontSize={{ xs: "1.5rem", md: "4rem" }}
              animation="none"
              gradient={gradients.blueLightBlue}
            />
          </Typography>
          <Typography fontSize={{ xs: "1.5rem", md: "3rem" }}>
            de transmision
          </Typography>
        </Box>
        <Box
          sx={{ py: { xs: 3, md: 6 } }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            maxWidth={{ xs: "90%", md: "70%" }}
            textAlign="center"
            fontSize={{ xs: "0.8rem", md: "1.5rem" }}
          >
            Disfruta de 24 horas de transmision seguidas, si anuncios y sin
            publicidad. Programas en directo todos los días, musica y contenido
            edificante para tu vida.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Schedules;

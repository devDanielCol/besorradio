import * as React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import gradients from "../../../utils/colors/gradients";
import Steps from "../../Steps/Molecules/Steps";
import GradientText from "../Atoms/GradientText";
import StepContiner from "../../Steps/Atoms/StepContainer";

const ContactSteps = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 6,
        pb: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GradientText
        legend="Contáctanos"
        fontSize={{ xs: "1.5rem", md: "4rem" }}
        animation="finally"
        gradient={gradients.blueLightBlue}
      />
      <Container maxWidth="md">
        <Steps
          step={1}
          leftContent={
            <StepContiner
              legend={
                "Conectate las 24 horas del día, y disfruta de una programación edificante para tu vida"
              }
            />
          }
        />
        <Steps
          step={2}
          rightContent={
            <StepContiner
              legend={
                "Conectate las 24 horas del día, y disfruta de una programación edificante para tu vida"
              }
            />
          }
        />
        <Steps
          step={3}
          leftContent={
            <StepContiner
              legend={
                "Conectate las 24 horas del día, y disfruta de una programación edificante para tu vida"
              }
            />
          }
        />
      </Container>
    </Box>
  );
};

export default ContactSteps;

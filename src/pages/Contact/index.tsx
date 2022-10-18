import GradientText from "../../components/Contact/BannerTop/Atoms/GradientText";
import * as React from "react";
import gradients from "../../utils/colors/gradients";
import { Box, Grow, Typography } from "@mui/material";
import { Container } from "@mui/system";

const ContactPage = () => {
  return (
    <>
      <Grow in={true} timeout={1000}>
        <Container maxWidth={"xl"} sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              width: "100%",
              pt: 6,
              pb: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                maxWidth: "95%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10,
                position: "relative",
              }}
            >
              <GradientText
                fontSize={["3.5rem", "7rem"]}
                legend="BesorRadio"
                animation="primary"
                gradient={gradients.purlpleRed}
              />
              <GradientText
                fontSize={["1.5rem", "4rem"]}
                legend="24H de transmision"
                animation="secondary"
                gradient={gradients.orangeYellow}
              />
              <Typography
                mt={3}
                fontSize={["1rem", "1.5rem"]}
                variant="body2"
                color="text.secondary"
                align="center"
                maxWidth={"90%"}
              >
                Conectate las 24 horas del día, y disfruta de una programación
                edificante para tu vida
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "-5%",
                right: "-15% !important",
                width: "40rem",
                transform: "rotate(-45deg)",
                height: "40rem",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: {
                  xs: "blur(7px) brightness(40%)",
                  lg: "blur(0px)",
                },
                backgroundImage: `url(${"/assets/images/others.png"})`,
                backgroundSize: "contain",
              }}
            ></Box>
          </Box>
        </Container>
      </Grow>
      <Box></Box>
    </>
  );
};

export default ContactPage;

import * as React from "react";
import { Box } from "@mui/system";
import { Container, Typography, Grid } from "@mui/material";
import ProgramCard from "../Molecules/ProgramCard";

const Programs = () => {
  return (
    <>
      <Box sx={{ py: 3, background: "#16213E" }}>
        <Container>
          <Typography
            color="white"
            textAlign="center"
            component="h2"
            fontSize="2rem"
          >
            Programas
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: 3 }} display="flex" justifyContent="center">
        <Grid maxWidth="md" container spacing={1}>
          {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
            <Grid key={index} md={4} xs={6}>
              <ProgramCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Programs;

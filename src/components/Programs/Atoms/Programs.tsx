import * as React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import ProgramCard from "../Molecules/ProgramCard";

const Programs = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: 1.5, md: 3 },
          background: "linear-gradient(45deg, black, #533483, black);",
        }}
      >
        <Container>
          <Typography
            color="white"
            textAlign="center"
            component="h2"
            fontSize={{
              xs: "1rem",
              md: "2rem",
            }}
          >
            Programas
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: 3, background: "black" }}>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
              },
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((e, i) => (
              <Box key={i} m={1}>
                <ProgramCard />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Programs;

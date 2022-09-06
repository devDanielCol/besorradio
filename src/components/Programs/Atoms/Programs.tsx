import * as React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import ProgramCard from "../Molecules/ProgramCard";

const Programs = () => {
  return (
    <>
      <Box
        id="programs"
        sx={{
          py: { xs: 1.5, md: 3 },
        }}
      >
        <Container>
          <Typography
            textAlign="center"
            component="h2"
            fontSize={{
              xs: "1.3rem",
              md: "2.5rem",
            }}
            fontWeight={700}
          >
            Nuestras emisiones en directo
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: 3 }}>
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

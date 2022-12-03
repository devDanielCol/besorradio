import * as React from "react";
import { Box } from "@mui/system";
import { CircularProgress, Container, Typography } from "@mui/material";
import ProgramCard from "../Molecules/ProgramCard";
import { GetProgramsData } from "../../../firebases/db/db";

interface Program {
  name: string;
  description: string;
  img: string;
}

const Programs = () => {
  const [programs, setPrograms] = React.useState<Program[]>();
  const [error, setError] = React.useState<string>();

  void GetProgramsData()
    .then((snapshot) => {
      if (snapshot.exists()) {
        const allPrograms = [];
        for (const key in snapshot.val()) {
          if (Object.prototype.hasOwnProperty.call(snapshot.val(), key)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            const element = snapshot.val()[key] as unknown as Program;
            allPrograms.push(element);
          }
        }

        setPrograms(allPrograms);
      } else {
        setError("Not data available");
        console.log(error);
      }
    })
    .catch((error) => {
      console.error(error, "error in dbdata get");
    });

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
          {programs ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2,1fr)",
                  md: "repeat(4,1fr)",
                },
              }}
            >
              {programs.map(({ name, description, img }, i) => (
                <Box key={i} m={1}>
                  <ProgramCard
                    name={name}
                    description={description}
                    img={img}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                minHeight: "40vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Programs;

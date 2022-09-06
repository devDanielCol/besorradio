import * as React from "react";
import { Box, Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const NotFound404Page = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReportProblemIcon sx={{ width: 200, height: 200 }} />
          <Typography fontSize={{ xs: "1.5rem", md: "3rem" }}>
            Error 404
          </Typography>
          <Typography fontSize={{ xs: "1rem", md: "2rem" }}>
            Pagina no encontrada
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NotFound404Page;

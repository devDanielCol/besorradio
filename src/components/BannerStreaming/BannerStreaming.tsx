import * as React from "react";
import { Container, Box, Button } from "@mui/material";

const BannerStreaming = () => {
  return (
    <Box
      sx={{
        py: { xs: 1.5, md: 3 },
        background: "black",
      }}
    >
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: {
              xs: "1rem",
              md: "1rem",
            },
            textTransform: "lowercase",
          }}
        >
          Ir a la Emision
        </Button>
      </Container>
    </Box>
  );
};

export default BannerStreaming;

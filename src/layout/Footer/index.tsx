import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Link from "@mui/material/Link";

interface IProps {
  sx: SxProps;
}

function Copyright(props: IProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        besorradio.net
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Divider sx={{ width: "90%" }} />
      <Box
        sx={{
          py: 7,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Copyright sx={{}} />
        <Typography sx={{ mt: 2, mb: 2 }} fontSize={{ xs: 12, md: 14 }}>
          Powered by
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link color="inherit">
            Daniel Cubillos - know about full software engineer
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

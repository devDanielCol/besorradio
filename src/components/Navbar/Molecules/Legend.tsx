import * as React from "react";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Legend = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      onClick={() => {
        navigate("/");
      }}
      sx={{ cursor: "pointer" }}
    >
      <Box
        sx={{ p: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <MicNoneIcon sx={{ width: 40, height: 40 }} />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography fontSize={12}>Emiesora online</Typography>
        <Typography fontWeight={700} fontSize={20}>
          Besorradio
        </Typography>
      </Box>
    </Box>
  );
};

export default Legend;

import * as React from "react";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Legend = () => {
  return (
    <Box display="flex" alignItems="center">
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
        <Typography fontSize={20}>Besorradio</Typography>
      </Box>
    </Box>
  );
};

export default Legend;

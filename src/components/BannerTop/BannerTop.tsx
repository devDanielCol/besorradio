import * as React from "react";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton, Typography, Box } from "@mui/material";

const socialNetworks = [
  FacebookOutlinedIcon,
  InstagramIcon,
  YouTubeIcon,
  ShareIcon,
];
const BannerTop = () => {
  return (
    <Box
      sx={{
        p: 0.5,
        minWidth: 370,
      }}
      p={0}
      m={0}
      display="flex"
    >
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center">
        <IconButton>
          <OnlinePredictionIcon />
        </IconButton>
        <Typography fontSize={12} ml={0.5}>
          On Air
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 0 }} display="flex" alignItems="center">
        {socialNetworks.map((Network, index) => (
          <IconButton key={index}>
            <Network />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default BannerTop;

import * as React from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import { IconButton, Box, SxProps } from "@mui/material";

interface IProps {
  sx: SxProps;
}

const Controls = ({ sx }: IProps) => {
  return (
    <Box sx={sx} alignItems="center" justifyContent="center">
      <Box>
        <IconButton>
          <FastRewindRoundedIcon />
        </IconButton>
        <IconButton>
          <PlayArrowRoundedIcon />
        </IconButton>
        <IconButton>
          <FastForwardRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Controls;

import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import { useTheme } from "@mui/material/styles";
import { IControls, play as onPlay } from "../../../redux/reducers/controlls";
import { useSelector, useDispatch } from "react-redux";

interface ISelector {
  controllerAudioStream: IControls;
}

const PausePlay = () => {
  const theme = useTheme();

  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const dispatch = useDispatch();

  const paused: boolean = useSelector(
    ({ controllerAudioStream }: ISelector) => controllerAudioStream.play
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -1,
        }}
      >
        <IconButton aria-label="previous song">
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label={paused ? "play" : "pause"}
          onClick={() => {
            dispatch(onPlay());
          }}
        >
          {paused ? (
            <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
          ) : (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
          )}
        </IconButton>
        <IconButton aria-label="next song">
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
    </>
  );
};

export default PausePlay;

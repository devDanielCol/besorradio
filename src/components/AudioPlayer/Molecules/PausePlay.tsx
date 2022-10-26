import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import { useTheme } from "@mui/material/styles";
import {
  IControls,
  play as onPlay,
  stop,
} from "../../../redux/reducers/controlls";
import { useSelector, useDispatch } from "react-redux";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import ReplayIcon from "@mui/icons-material/Replay";

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
        <IconButton
          aria-label={paused ? "play" : "pause"}
          onClick={() => {
            void dispatch(onPlay());
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
        <IconButton aria-label="reload streaming">
          <ReplayIcon fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          onClick={() => {
            void dispatch(stop());
            void dispatch(onPlay());
          }}
          aria-label="stop streaming"
        >
          <StopCircleIcon fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
    </>
  );
};

export default PausePlay;

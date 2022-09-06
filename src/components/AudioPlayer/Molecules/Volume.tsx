import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import { useSelector, useDispatch } from "react-redux";
import {
  IControls,
  volume as onVolume,
} from "../../../redux/reducers/controlls";

interface ISelector {
  controllerAudioStream: IControls;
}

const Volume = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const volume: number = useSelector(
    ({ controllerAudioStream }: ISelector) => controllerAudioStream.volume
  );

  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
      >
        <VolumeDownRounded htmlColor={lightIconColor} />
        <Slider
          aria-label="Volume"
          value={volume * 100}
          onChange={(_, vol) => {
            dispatch(onVolume(Number(vol) / 100));
          }}
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 24,
              height: 24,
              backgroundColor: "#fff",
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
        <VolumeUpRounded htmlColor={lightIconColor} />
      </Stack>
    </>
  );
};

export default Volume;

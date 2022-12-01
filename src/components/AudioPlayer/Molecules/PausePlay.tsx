import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import UseAudioCtrl from "../../../utils/hooks/AudioControl";

const PausePlay = () => {
  const theme = useTheme();
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const { loading, play, playHandler, stopHandler } = UseAudioCtrl();
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
        {loading ? (
          <IconButton>
            <CircularProgress size={"2.5rem"} />
          </IconButton>
        ) : (
          <IconButton
            aria-label={play ? "play" : "pause"}
            onClick={playHandler}
          >
            {play ? (
              <PauseRounded
                sx={{ fontSize: "2.5rem" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PlayArrowRounded
                sx={{ fontSize: "2.5rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
        )}
        <IconButton onClick={stopHandler} aria-label="stop streaming">
          <StopCircleIcon
            sx={{ fontSize: "2.5rem" }}
            htmlColor={mainIconColor}
          />
        </IconButton>
      </Box>
    </>
  );
};
export default PausePlay;

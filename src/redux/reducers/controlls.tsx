import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLocalStorage } from "../../utils/helpers/storagEncrypt";
import { Howler } from "howler";
import StreamingAudio from "../../streaming/audio/Howler";
const streaming = StreamingAudio;
export interface IControls {
  play: boolean;
  volume: number;
  currentTime: number;
  stop: boolean;
  loading: boolean;
}
const initialState: IControls = {
  play: false,
  volume: streaming.volume(),
  currentTime: 0,
  stop: false,
  loading: false,
};
export const controllerAudioStream = createSlice({
  name: "streaming-controlls",
  initialState,
  reducers: {
    volume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
      streaming.volume(state.volume);
      setLocalStorage("volume", String(state.volume));
    },
    play: (state) => {
      state.play = !state.play;
      if (state.play) {
        streaming.play();
      } else {
        streaming.pause();
      }
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    stop: (state) => {
      state.play = false;
      state.loading = false;
      state.stop = !state.stop;
      Howler.stop();
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const { volume, play, setTime, stop, loading } =
  controllerAudioStream.actions;
export default controllerAudioStream.reducer;

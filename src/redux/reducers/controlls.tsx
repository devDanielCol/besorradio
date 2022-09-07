import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/helpers/storagEncrypt";

const initVol = Number(getLocalStorage("volume"));

export interface IControls {
  play: boolean;
  volume: number;
  currentTime: number;
  stop: boolean;
}

const initialState: IControls = {
  play: false,
  volume: initVol || 0.5,
  currentTime: 0,
  stop: false,
};

export const controllerAudioStream = createSlice({
  name: "streaming-controlls",
  initialState,
  reducers: {
    volume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
      setLocalStorage("volume", String(state.volume));
    },
    play: (state) => {
      state.play = !state.play;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    stop: (state) => {
      state.stop = !state.stop;
    },
  },
});

export const { volume, play, setTime, stop } = controllerAudioStream.actions;

export default controllerAudioStream.reducer;

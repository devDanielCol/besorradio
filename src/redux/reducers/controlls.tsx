import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/helpers/storagEncrypt";
import { Howl, Howler } from "howler";
import config from "../../streaming/config";

const initVol = Number(getLocalStorage("volume"));

const streaming = new Howl({
  src: [config.radio.source || ""],
  html5: true,
  volume: initVol,
  format: "streaming",
});

export interface IControls {
  play: boolean;
  volume: number;
  currentTime: number;
  stop: boolean;
}

const initialState: IControls = {
  play: false,
  volume: streaming.volume(),
  currentTime: 0,
  stop: false,
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
      state.stop = !state.stop;
      Howler.stop();
    },
  },
});

export const { volume, play, setTime, stop } = controllerAudioStream.actions;

export default controllerAudioStream.reducer;

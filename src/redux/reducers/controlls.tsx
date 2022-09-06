import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IControls {
  play: boolean;
  volume: number;
  currentTime: number;
}

const initialState: IControls = {
  play: false,
  volume: 0.5,
  currentTime: 0,
};

export const controllerAudioStream = createSlice({
  name: "streaming-controlls",
  initialState,
  reducers: {
    volume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    resetVolume: (state) => {
      state.volume = initialState.volume;
    },
    play: (state) => {
      state.play = !state.play;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
  },
});

export const { volume, resetVolume, play, setTime } =
  controllerAudioStream.actions;

export default controllerAudioStream.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IControls {
  play: boolean;
  volume: number;
}

const initialState: IControls = {
  play: false,
  volume: 1,
};

export const controllerAudioStream = createSlice({
  name: "streaming-controlls",
  initialState,
  reducers: {
    upVolume: (state, action: PayloadAction<number>) => {
      state.volume += action.payload;
    },
    downVolume: (state, action: PayloadAction<number>) => {
      state.volume -= action.payload;
    },
    resetVolume: (state) => {
      state.volume = initialState.volume;
    },
    play: (state) => {
      state.play = !state.play;
    },
  },
});

export const { upVolume, downVolume, resetVolume, play } =
  controllerAudioStream.actions;

export default controllerAudioStream.reducer;

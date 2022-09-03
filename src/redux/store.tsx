import { configureStore } from "@reduxjs/toolkit";
import controllerAudioStream from "./reducers/controlls";

export const store = configureStore({
  reducer: { controllerAudioStream },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

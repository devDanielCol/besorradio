import { configureStore } from "@reduxjs/toolkit";
import controllerAudioStream from "./reducers/controlls";
import controllerTheme from "./reducers/theme";

export const store = configureStore({
  reducer: { controllerAudioStream, controllerTheme },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

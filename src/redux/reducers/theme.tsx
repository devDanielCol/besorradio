import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/helpers/storagEncrypt";

export interface IThemeControls {
  theme: string;
}

const initialState: IThemeControls = {
  theme: String(getLocalStorage("mode") || "dark"),
};

export const controllerTheme = createSlice({
  name: "theme-controlls",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.theme = action.payload;
      setLocalStorage("mode", state.theme);
    },
  },
});

export const { changeTheme } = controllerTheme.actions;

export default controllerTheme.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IThemeControls {
  theme: "dark" | "light";
}

const initialState: IThemeControls = {
  theme: "light",
};

export const controllerTheme = createSlice({
  name: "theme-controlls",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = controllerTheme.actions;

export default controllerTheme.reducer;

import * as React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "../layout/Header/Index";
import HomePage from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import darkThemeOption from "../themes/darkmode";
import lightThemeOptions from "../themes/lightmode";
import { useSelector } from "react-redux";
import { IThemeControls } from "../redux/reducers/theme";

interface ISelector {
  controllerTheme: IThemeControls;
}

const App = () => {
  const mode: string = useSelector(
    ({ controllerTheme }: ISelector) => controllerTheme.theme
  );
  const themes = {
    dark: darkThemeOption,
    light: lightThemeOptions,
  }[mode];

  const theme = createTheme(themes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={"Hola planeta"} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

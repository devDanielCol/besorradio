import * as React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "../layout/Header/Index";
import HomePage from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import darkThemeOption from "../themes/darkmode";
import lightThemeOptions from "../themes/lightmode";
import { useSelector } from "react-redux";
import { IThemeControls } from "../redux/reducers/theme";
import Footer from "../layout/Footer";
import NotFound404Page from "./404";
import SignIn from "../components/LogIn/Atoms/Login";
import { IControls } from "../redux/reducers/controlls";
import AudioStreaming from "../streaming/audio/source/AudioStreaming";

interface ISelector {
  controllerTheme: IThemeControls;
}

interface ISelector {
  controllerAudioStream: IControls;
}

const App = () => {
  const mode: string = useSelector(
    ({ controllerTheme }: ISelector) => controllerTheme.theme
  );
  const themes = {
    dark: darkThemeOption,
    light: lightThemeOptions,
  }[mode];

  console.log("se cargo la pagina");
  console.log(process.env.REACT_APP_STREAMING);

  const theme = createTheme(themes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AudioStreaming />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

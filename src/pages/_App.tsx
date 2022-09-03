import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Carrousell from "../components/Carrousell/Atoms/Carrousell";
import Header from "../layout/Header/Index";
import Schedules from "../components/Schedules/Atoms/Schedules";
import Programs from "../components/Programs/Atoms/Programs";
import BannerStreaming from "../components/BannerStreaming/BannerStreaming";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Header></Header>
      <Carrousell></Carrousell>
      <Schedules />
      <Programs />
      <BannerStreaming />
    </ThemeProvider>
  );
};

export default App;

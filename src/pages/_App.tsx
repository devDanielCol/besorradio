import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Carrousell from "../components/Carrousell/Atoms/Carrousell";
import Header from "../layout/Header/Index";
import Schedules from "../components/Schedules/Atoms/Schedules";
import Programs from "../components/Programs/Atoms/Programs";

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
      <div style={{ height: "200vh", width: "100%" }}></div>
    </ThemeProvider>
  );
};

export default App;

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../layout/Header/Index";
import HomePage from "./Home";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;

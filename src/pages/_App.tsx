import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../layout/Header/Index";
import HomePage from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../layout/Footer";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={"Hola planeta"} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

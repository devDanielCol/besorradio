import { ThemeOptions } from "@mui/material/styles";

const lightThemeOption: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
      dark: "#261B61",
      light: "#B3C8DF",
    },
    secondary: {
      main: "#47A5FF",
      light: "#7CD0C8",
    },
    info: {
      main: "#B8C7FF",
      dark: "#1E1938",
      light: "#7B78ED",
    },
    warning: {
      main: "#FEC201",
      dark: "#FF7A00",
    },
    success: {
      main: "#B3EAC6",
      dark: "#0FD960",
    },
    common: {
      white: "#FFFFFF",
      black: "#201919",
    },
  },
};

export default lightThemeOption;

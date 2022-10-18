import { ThemeOptions } from "@mui/material/styles";

const darkThemeOption: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#red",
      dark: "#1E1938",
      light: "#B3C8DF",
    },
    secondary: {
      main: "#75ACFF",
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
      main: "#B3DCEA",
      dark: "#0FD960",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    background: {
      default: "#000",
      paper: "#111",
    },
  },
};

export default darkThemeOption;

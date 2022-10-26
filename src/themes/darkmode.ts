import { ThemeOptions } from "@mui/material/styles";

const darkThemeOption: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4d4d",
      dark: "#ff4d4d",
      light: "#f9cb28",
    },
    secondary: {
      main: "#7928ca",
      dark: "#ff0080",
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

import { ThemeOptions } from "@mui/material/styles";

const besorThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ["Causten"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Causten';
          font-style: normal;
          font-display: swap;
          font-weight: 100;
        }
      `,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#653F90",
      dark: "#271938",
      light: "#C8B0E3",
    },
    secondary: {
      main: "#75ACFF",
      light: "#A47CD0",
    },
    info: {
      main: "#B8C7FF",
      dark: "#7B78ED",
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
  },
};

export default besorThemeOptions;

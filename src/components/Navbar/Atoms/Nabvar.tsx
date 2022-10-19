import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";
import Legend from "../Molecules/Legend";
import Menubar from "../../Menubar/Atoms/Menubar";
import { useScrollTrigger, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import gradients from "../../../utils/colors/gradients";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props: Props) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position="sticky"
          sx={{
            top: 0,
            minWidth: 375,
            backgroundColor: "background.default",
            backgroundImage:
              mode === "light" ? gradients.whiteLight : gradients.blackDark,
          }}
        >
          <Toolbar disableGutters>
            <Box
              width={"100%"}
              display="grid"
              sx={{
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(2, 1fr)",
                },
              }}
            >
              <Legend />
              <Menubar />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default Navbar;

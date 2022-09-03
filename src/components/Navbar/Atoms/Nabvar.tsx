import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/system";
import Controls from "../Molecules/Controls";
import Legend from "../Molecules/Legend";
import Menubar from "../../Menubar/Atoms/Menubar";

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ top: 0, minWidth: 375 }}>
        <Toolbar disableGutters>
          <Box
            width={"100%"}
            display="grid"
            sx={{
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
            }}
          >
            <Legend />
            <Controls
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            />
            <Menubar />
          </Box>
        </Toolbar>
        <Controls
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        />
      </AppBar>
    </>
  );
};
export default Navbar;

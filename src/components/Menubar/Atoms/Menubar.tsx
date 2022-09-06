import * as React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Divider, Drawer, IconButton, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenubarOption from "../Molecules/MenubarOption";
import MusicPlayerSlider from "../../AudioPlayer/Atoms/Player";
import Account from "../Molecules/Account";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import CategoryIcon from "@mui/icons-material/Category";

import ContactPageIcon from "@mui/icons-material/ContactPage";
import SocialNetAccordion from "../Molecules/SocialNetAccordion";
import ThemeControl from "../Molecules/ThemeControl";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  {
    name: "Programas",
    icon: <CategoryIcon />,
    url: "/#programs",
  },
  {
    name: "Emision en directo",
    icon: <OnlinePredictionIcon />,
    url: "/radio/streaming",
  },
  {
    name: "Contacto",
    icon: <ContactPageIcon />,
    url: "/contact",
  },
];

const Menubar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const theme = useTheme();
  const palette = theme.palette;
  const navigator = useNavigate();

  const handleOpenBar = () => {
    setOpen(!open);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  return (
    <Box display="flex" alignItems="center" justifyContent="end">
      <IconButton onClick={handleOpenBar}>
        <MenuRoundedIcon sx={{ width: 40, height: 40 }} />
      </IconButton>
      <Drawer
        sx={{ backdropFilter: "blur(4px)" }}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: {
              xs: "100vw",
              md: "auto",
            },
            minWidth: 370,
          }}
          role="presentation"
        >
          <Box
            display="flex"
            flexDirection="row"
            p={1}
            pl={3}
            alignItems="center"
            justifyContent="space-between"
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 2,
              backgroundColor: palette.primary.main,
              boxShadow: 2,
            }}
          >
            <Typography fontSize={12}>Navegación</Typography>
            <IconButton onClick={handleOpenBar}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Box onClick={handleOpenBar}>
            <Account />
          </Box>
          <Divider />
          <ThemeControl />
          <Divider />
          <MusicPlayerSlider />
          <Divider />
          <List sx={{ py: 3 }}>
            {navigationItems.map(({ name, icon, url }, index) => (
              <div
                key={index}
                onClick={() => {
                  handleOpenBar();
                  navigator(url);
                }}
              >
                <MenubarOption text={name} icon={icon} />
              </div>
            ))}
          </List>
          <SocialNetAccordion />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Menubar;

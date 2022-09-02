import * as React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface IProps {
  text: string;
  icon: React.ReactNode;
}

const MenubarOption = ({ text, icon }: IProps) => {
  return (
    <ListItem key={text} disablePadding sx={{ minWidth: 380 }}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenubarOption;

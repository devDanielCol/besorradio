import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShareIcon from "@mui/icons-material/Share";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@mui/material";
import MenubarOption from "./MenubarOption";
import { useTheme } from "@mui/material/styles";

const socialNetworks = [
  {
    name: "Facebook",
    icon: <FacebookOutlinedIcon />,
    url: "https://www.facebook.com/Besorradio24hr",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
    url: "",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/besorradio/?hl=es",
  },
  {
    name: "Compartir",
    icon: <ShareIcon />,
    url: "",
  },
];

const SocialNetAccordion = () => {
  const [accordionOptions, setAccordionOptions] =
    React.useState<boolean>(false);
  const theme = useTheme();

  const handlerAccordion = () => {
    setAccordionOptions(!accordionOptions);
  };
  return (
    <Accordion
      sx={{ m: 0, p: 0 }}
      expanded={accordionOptions}
      onChange={handlerAccordion}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        Redes sociales
      </AccordionSummary>
      <AccordionDetails sx={{ m: 0, p: 0 }}>
        <List>
          {socialNetworks.map(({ name, icon, url }, index) => (
            <Typography
              component="a"
              href={url}
              target="_blank"
              key={index}
              color={theme.palette.secondary.main}
            >
              <MenubarOption text={name} icon={icon} />
            </Typography>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default SocialNetAccordion;

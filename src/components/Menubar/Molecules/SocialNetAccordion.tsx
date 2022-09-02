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
} from "@mui/material";
import MenubarOption from "./MenubarOption";

const socialNetworks = [
  {
    name: "Facebook",
    icon: <FacebookOutlinedIcon />,
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    name: "Compartir",
    icon: <ShareIcon />,
  },
];

const SocialNetAccordion = () => {
  const [accordionOptions, setAccordionOptions] =
    React.useState<boolean>(false);

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
          {socialNetworks.map(({ name, icon }, index) => (
            <MenubarOption key={index} text={name} icon={icon} />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default SocialNetAccordion;

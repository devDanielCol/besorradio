import * as React from "react";
import { Tab, Tabs, Typography } from "@mui/material";

const weekDays = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const Day = (text: string) => {
  return <Typography textTransform="capitalize">{text}</Typography>;
};

const SchedulDaysTab = () => {
  const [tab, setTab] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  return (
    <>
      <Tabs
        variant="scrollable"
        scrollButtons
        value={tab}
        onChange={handleChange}
      >
        {weekDays.map((text, index) => (
          <Tab key={index} label={Day(text)} />
        ))}
      </Tabs>
    </>
  );
};

export default SchedulDaysTab;

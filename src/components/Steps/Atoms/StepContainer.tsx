import * as React from "react";
import { Box, Grow, Typography } from "@mui/material";
import { InView } from "react-intersection-observer";

interface IProps {
  legend: React.ReactNode;
}

const StepContiner: React.FC<IProps> = ({ legend }) => {
  const [on, setOn] = React.useState<boolean>(false);

  return (
    <InView
      onChange={(inview) => {
        setOn(inview);
      }}
    >
      <Grow in={on} timeout={1000}>
        <Box
          width="100%"
          height="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={["0.8rem", "1rem"]}
            variant="body2"
            color="text.secondary"
            align="center"
            maxWidth={"90%"}
            textAlign={"center"}
          >
            {legend}
          </Typography>
        </Box>
      </Grow>
    </InView>
  );
};

export default StepContiner;

import { Grid, Container, CircularProgress } from "@mui/material";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { VerifyUserInSession } from "../../../firebases/auth/auth";
import Account from "../../Menubar/Molecules/Account";

const Profile = () => {
  const [userData, setuserData] = useState<User>();

  useEffect(() => {
    void VerifyUserInSession(
      (userData) => {
        setuserData(userData);
        console.log(userData);
      },
      () => {
        setuserData(undefined);
      }
    );
  }, []);

  return userData ? (
    <Container maxWidth="xl" sx={{ minHeight: "70vh" }}>
      <Grid container>
        <Grid
          item
          xs={0}
          md={3}
          sx={{ backgroundColor: "background.paper", height: "100%" }}
        >
          <Account />
        </Grid>
        <Grid item xs={0} md={9} sx={{ height: "50vh" }}></Grid>
      </Grid>
    </Container>
  ) : (
    <Container
      sx={{
        minHeight: "60vh",
        py: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "transparent",
      }}
    >
      <CircularProgress color="secondary" />
    </Container>
  );
};

export default Profile;

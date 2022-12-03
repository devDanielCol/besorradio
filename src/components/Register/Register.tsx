import Container from "@mui/material/Container";
import { CircularProgress } from "@mui/material";
import { VerifyUserInSession } from "../../firebases/auth/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import FormRegister from "./Atoms/FormRegister";

export default function CreateNewUser() {
  const navigate = useNavigate();
  const [inSession, setInSession] = useState<boolean>(false);

  useEffect(() => {
    void VerifyUserInSession(
      () => {
        setInSession(true);
      },
      () => {
        setInSession(false);
      }
    );
  }, []);

  if (inSession) {
    navigate("/profile");
  }

  return !inSession ? (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FormRegister />
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
}

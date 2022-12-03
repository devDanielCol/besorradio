import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  Container,
  Link as LinkMUI,
} from "@mui/material";
import { useEffect, useState } from "react";
import { VerifyUserInSession } from "../../../firebases/auth/auth";
import { Link, useNavigate } from "react-router-dom";
import gradients from "../../../utils/colors/gradients";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GoogleButton from "../Atoms/GooogleButton";

const LoginMethods = () => {
  const [inSession, setInSession] = useState<boolean>(false);

  const navigate = useNavigate();

  void VerifyUserInSession(
    () => {
      setInSession(true);
    },
    () => {
      setInSession(false);
    }
  );

  useEffect(() => {
    if (inSession) {
      navigate("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inSession]);

  return (
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
      <Paper
        sx={{
          width: 300,
          minHeight: "300px",
          borderRadius: "22px",
          p: "2px",
          bgcolor: "transparent",
        }}
        elevation={0}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            p: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "transparent",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "2rem",
              textAlign: "center",
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            Iniciar session en besorradio
          </Typography>
          <GoogleButton />

          <Link
            to={"/login/email"}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button
              component="div"
              variant="contained"
              sx={{
                textDecoration: "none",
                mt: 2,
                textTransform: "initial",
                width: "100%",
                fontSize: "1rem",
                backgroundImage: gradients.blueLightBlue,
                py: 1.6,
                color: "white",
                fontWeight: 700,
                borderRadius: "12px",
              }}
            >
              <AlternateEmailIcon sx={{ mr: 1 }} />
              Continuar con correo
            </Button>
          </Link>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button
              component="div"
              variant="outlined"
              sx={{
                textDecoration: "none",
                mt: 2,
                textTransform: "initial",
                width: "100%",
                fontSize: "1rem",
                borderRadius: "12px",
                py: 1.6,
                fontWeight: 700,
              }}
            >
              Registrare
            </Button>
          </Link>
          <Divider sx={{ width: "100%", my: 3, textAlign: "center" }} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LinkMUI>Terminos y condiciones</LinkMUI>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginMethods;

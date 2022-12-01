import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Link as LinkMUI,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import gradients from "../../../utils/colors/gradients";
import GoogleIcon from "@mui/icons-material/Google";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {
  SignInWithGooglePopup,
  SignInWithRedirect,
} from "../../../firebases/auth/google";
import { useEffect, useState } from "react";
import { VerifyUserInSession } from "../../../firebases/auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../../utils/helpers/storagEncrypt";
import DialogError from "../Atoms/DialogError";

const LoginMethods = () => {
  const [inSession, setInSession] = useState<boolean>(false);
  const defaultErrorInfo = {
    button: "",
    content: "",
    open: false,
    title: "",
  };
  const [loginError, setLoginError] = useState(defaultErrorInfo);

  const navigate = useNavigate();

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

  const handlerSinginRedirect = () => {
    void SignInWithRedirect()
      .then()
      .catch(() => {
        setLoginError({
          title: "Al parecer ocurrio un error",
          content: `Se intento inciar sesion con google, al parecer
        ocurrio un error en el intento. `,
          button: "Entendido",
          open: true,
        });
      });
  };
  const handlerSigninPopup = () => {
    void SignInWithGooglePopup()
      .then((data) => {
        setLocalStorage("uid", data.user.uid);
        setLocalStorage("provid", data.user.providerId);
      })
      .catch(() => {
        setLoginError({
          title: "Al parecer ocurrio un error",
          content: `Se intento inciar sesion con google, al parecer
          ocurrio un error en el intento. `,
          button: "Entendido",
          open: true,
        });
      });
  };

  return !inSession ? (
    <>
      <DialogError
        {...loginError}
        handleClose={() => {
          setLoginError(defaultErrorInfo);
        }}
      />
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
              sx={{ fontSize: "2rem", textAlign: "center", lineHeight: 1 }}
            >
              Iniciar session en besorradio
            </Typography>
            <Box sx={{ mt: 5, width: "100%" }}>
              <Button
                variant="contained"
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                  textTransform: "initial",
                  width: "100%",
                  fontSize: "1rem",
                  py: 1.6,
                  backgroundImage: gradients.orangeYellow,
                  color: "white",
                  fontWeight: 700,
                }}
                onClick={handlerSinginRedirect}
              >
                <GoogleIcon sx={{ mr: 1 }} />
                Continuar con Google
              </Button>
              <Button
                variant="contained"
                sx={{
                  display: {
                    xs: "flex",
                    lg: "none",
                  },
                  textTransform: "initial",
                  width: "100%",
                  fontSize: "1rem",
                  py: 1.6,
                  backgroundImage: gradients.orangeYellow,
                  color: "white",
                  fontWeight: 700,
                }}
                onClick={handlerSigninPopup}
              >
                <GoogleIcon sx={{ mr: 1 }} />
                Continuar con Google
              </Button>
              <Link to={"/login/email"} style={{ textDecoration: "none" }}>
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
                  }}
                >
                  <AlternateEmailIcon sx={{ mr: 1 }} />
                  Continuar con correo
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
          </Box>
        </Paper>
      </Container>
    </>
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

export default LoginMethods;

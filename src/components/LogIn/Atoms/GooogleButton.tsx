import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {
  SignInWithRedirect,
  SignInWithGooglePopup,
} from "../../../firebases/auth/google";
import gradients from "../../../utils/colors/gradients";
import { setLocalStorage } from "../../../utils/helpers/storagEncrypt";
import DialogError from "./DialogError";
import GoogleIcon from "@mui/icons-material/Google";

const defaultErrorInfo = {
  button: "",
  content: "",
  open: false,
  title: "",
};

const GoogleButton = () => {
  const [loginError, setLoginError] = useState(defaultErrorInfo);

  const handlerSinginRedirect = () => {
    void SignInWithRedirect();
  };

  const handlerSigninPopup = () => {
    void SignInWithGooglePopup()
      .then((data) => {
        setLocalStorage("uid", data.user.uid);
        setLocalStorage("provid", data.user.providerId);
      })
      .catch(() => {
        setLoginError({
          title: "Ocurrio un error",
          content: `Se intento inciar sesion con google,
              ocurrio un error en el intento.`,
          button: "Entendido",
          open: true,
        });
      });
  };

  return (
    <Box sx={{ mt: 5, width: "100%" }}>
      <DialogError
        {...loginError}
        handleClose={() => {
          setLoginError(defaultErrorInfo);
        }}
      />
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
          borderRadius: "12px",
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
    </Box>
  );
};

export default GoogleButton;

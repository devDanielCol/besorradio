import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkMUI from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CircularProgress, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  SignInWithEmailPassword,
  VerifyUserInSession,
} from "../../../firebases/auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DialogError from "./DialogError";
import { setLocalStorage } from "../../../utils/helpers/storagEncrypt";
import { correctEmail } from "../../../utils/helpers/RegexVerify";

export default function SignIn() {
  const navigate = useNavigate();
  const [inSession, setInSession] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const defaultErrorInfo = {
    button: "",
    content: "",
    open: false,
    title: "",
  };
  const [loginError, setLoginError] = useState(defaultErrorInfo);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, password, termsconditions } = {
      email: data.get("email") as string,
      password: data.get("password") as string,
      termsconditions: data.get("termsconditions") as unknown as boolean,
    };

    if (correctEmail(email) && password && termsconditions) {
      setLoading(true);
      void SignInWithEmailPassword({ email, password })
        .then((data) => {
          setLocalStorage("uid", data.user.uid);
          setLocalStorage("provid", data.user.providerId);
          setLoading(false);
          navigate("/profile");
        })
        .catch(() => {
          setLoading(false);
          setLoginError({
            title: "Credenciales incorrectas",
            content: "Revisa los datos, y vuelve a intentarlo.",
            open: true,
            button: "Entendido",
          });
        });
    } else {
      setLoginError({
        title: "Completa los datos de inicio",
        content:
          "Antes de continuar, es necesario que llenes todos los campos.",
        open: true,
        button: "Entendido",
      });
    }
  };

  const { palette } = useTheme();
  const mode = palette.mode;

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
    navigate("/");
  }

  return !inSession ? (
    <Container component="main" maxWidth="xs">
      <DialogError
        {...loginError}
        handleClose={() => {
          setLoginError(defaultErrorInfo);
        }}
      />
      <Paper
        sx={{
          marginY: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.default",
          p: 3,
          borderRadius: 3,
          color: mode === "dark" ? "white" : "black",
        }}
        elevation={3}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography component="h1" variant="h4">
            Inicia sesion
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            color="primary"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            color={"primary"}
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            id="termsConditions-label"
            control={
              <Checkbox
                id="termsConditions"
                value="terms-conditions"
                color="secondary"
                name="termsconditions"
              />
            }
            label="Acepto terminos y condiciones de uso"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? (
              <CircularProgress color="inherit" size={"2rem"} />
            ) : (
              "Iniciar sesion"
            )}
          </Button>
          <Grid container>
            <Grid item xs>
              <LinkMUI color="secondary" href="#" variant="body2">
                ¿Olvidaste la contraseña?
              </LinkMUI>
            </Grid>
            <Grid item>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <LinkMUI color="secondary" component="span" variant="body2">
                  {"¿No tienes una cuenta?"}
                </LinkMUI>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
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

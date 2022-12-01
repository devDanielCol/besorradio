import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CircularProgress, Grid, Link as LinkMUI } from "@mui/material";
import {
  CreateUserWithEmail,
  VerifyUserInSession,
} from "../../firebases/auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setLocalStorage } from "../../utils/helpers/storagEncrypt";
import DialogError from "../LogIn/Atoms/DialogError";

export default function CreateNewUser() {
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

    if (email && password && termsconditions) {
      setLoading(true);
      void CreateUserWithEmail({ email, password })
        .then((data) => {
          setLocalStorage("uid", data.user.uid);
          setLocalStorage("provid", data.user.providerId);
          setLoading(false);
          setInSession(true);
          navigate("/profile");
        })
        .catch((error) => {
          setLoading(false);
          setLoginError({
            title: "Ocurrio un error con el registro",
            content:
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              (error.message as string) ===
              "Firebase: Error (auth/email-already-in-use)."
                ? "Esté email ya esta en una cuenta registrada"
                : "Ocurrio un error inesperado",
            open: true,
            button: "Entendido",
          });
        });
    }
  };

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
    navigate("/prifile");
  }

  return !inSession ? (
    <Box
      sx={{
        backgroundImage: "url(/assets/images/studio.jpg)",
        backgroundSize: "cover",
        backgroundOrigin: "center",
        backgroundRepeat: "no-repeat",
        py: 3,
      }}
    >
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
        <DialogError
          {...loginError}
          handleClose={() => {
            setLoginError(defaultErrorInfo);
          }}
        />
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box sx={{ my: 4 }}>
              <Typography
                sx={{
                  fontSize: { xs: "3rem", md: "4rem" },
                  color: "white",
                  letterSpacing: 0.1,
                  lineHeight: 1,
                }}
              >
                Nueva imagen
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  color: "white",
                  letterSpacing: 0.1,
                  lineHeight: 1,
                }}
              >
                La mejor app del mundo
              </Typography>
              <Typography
                sx={{
                  mt: 4,
                  fontSize: { xs: "1rem", md: "2rem" },
                  color: "white",
                  letterSpacing: 0.1,
                  lineHeight: 1,
                }}
              >
                Registrate y empieza a disfrutar de la mejor programacion en
                vivo
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              backgroundColor: "background.default",
              p: 3,
              borderRadius: "20px",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Crea una cuenta nueva
                </Typography>
              </Box>
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
                  "Registrarse"
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <LinkMUI color="secondary" href="#" variant="body2"></LinkMUI>
                </Grid>
                <Grid item>
                  <Link to="/login/email" style={{ textDecoration: "none" }}>
                    <LinkMUI color="secondary" component="span" variant="body2">
                      {"¿Ya tienes una cuenta?"}
                    </LinkMUI>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
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

import {
  Grid,
  Container,
  CircularProgress,
  Button,
  Box,
  Dialog,
  Typography,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
} from "@mui/material";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignOut,
  VerifyUserInSession,
  UpdateProfileData,
  SendEmaiVerification,
  UpdateEmail,
} from "../../../firebases/auth/auth";
import Account from "../../Menubar/Molecules/Account";

const Profile = () => {
  const [userData, setuserData] = useState<User>();
  const [closeSession, setCloseSession] = useState(false);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    void VerifyUserInSession(
      (userData) => {
        setuserData(userData);
        setFullName(userData.displayName || "");
        setEmail(userData.email || "");
      },
      () => {
        setuserData(undefined);
        navigate("/login");
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerSignOut = () => {
    SignOut(
      () => {
        console.log("session-ended");
      },
      () => {
        console.error("fail-singout");
      }
    );
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fullName && fullName !== userData?.displayName) {
      void UpdateProfileData(fullName)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err, "error");
        });
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (email && email !== userData?.email && emailRegex.test(email)) {
      void UpdateEmail(email).then((e) => {
        console.log(e, "email actualizado correctamente");
      });
    } else {
      console.log("email no valido");
    }
  };

  const sendEmailVerification = () => {
    if (!userData?.emailVerified) {
      void SendEmaiVerification().then(() => {
        alert("Email enviado");
      });
    } else {
      alert("Este email se acabo de enviar");
    }
  };

  return userData ? (
    <Container maxWidth="xl" sx={{ minHeight: "50vh" }}>
      <Dialog
        open={closeSession}
        maxWidth="xs"
        onClose={() => {
          setCloseSession(false);
        }}
      >
        <DialogContent
          sx={{
            p: 2,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem" }}>Cerrar sesion</Typography>
          <Box sx={{ my: 2, px: 2, textAlign: "center" }}>
            ¿Estás seguro de cerrar tu sesion?
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setCloseSession(false);
            }}
          >
            No
          </Button>
          <Button variant="contained" color="error" onClick={handlerSignOut}>
            Si
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container columnSpacing={3} rowSpacing={2} py={3}>
        <Grid item xs={0} md={3}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "20px",
            }}
          >
            <Box>
              <Account />
            </Box>
            <Box sx={{ p: 2 }}>
              <Button
                onClick={() => {
                  setCloseSession(true);
                }}
                variant="contained"
                color="error"
                sx={{
                  width: "100%",
                  textTransform: "initial",
                  borderRadius: "10px",
                }}
              >
                Cerrar sesion
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              minHeight: "50vh",
              backgroundColor: "background.paper",
              p: 3,
              borderRadius: "20px",
            }}
          >
            <Box sx={{ width: "100%", pb: 2 }}>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Tu informacion de usuario
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={12} sm={6} md={4} p={2}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-password-input"
                    label="Nombre Completo"
                    name="Nombre completo"
                    value={fullName}
                    type="text"
                    variant="standard"
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    autoComplete="current-password"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} p={2}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-password-input"
                    label="Correo Electrónico"
                    name="email"
                    value={email}
                    type="email"
                    variant="standard"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}>
                <Button
                  variant="contained"
                  sx={{ textTransform: "initial" }}
                  type="submit"
                >
                  Actualizar Datos
                </Button>
              </Box>
            </form>
            <Box sx={{ mt: 4 }}>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Verificación de correo Electrónico
              </Typography>
              <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
                Te enviaremos un correo a la dirección de corre electrónico
                registrada, para que esta cuenta sea autenticada.
              </Typography>
              <Grid container sx={{ mt: 2 }} spacing={1}>
                <Grid item xs={8} md={6}>
                  <TextField
                    sx={{ width: "100%", height: "10px" }}
                    id="outlined-password-input"
                    label="Correo Electrónico"
                    value={userData.email}
                    type="email"
                    variant="filled"
                    disabled
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={4} md={6}>
                  <Button
                    disabled={userData.emailVerified}
                    variant="contained"
                    sx={{ textTransform: "initial", py: { xs: 0.5, md: 2 } }}
                    onClick={sendEmailVerification}
                  >
                    Autenticar
                  </Button>
                </Grid>
              </Grid>
              {userData.emailVerified && (
                <Alert
                  severity="success"
                  sx={{ mt: 3, width: "fit-content", borderRadius: "12px" }}
                >
                  Este correo ya esta verificado y autenticado
                </Alert>
              )}
            </Box>
          </Box>
        </Grid>
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

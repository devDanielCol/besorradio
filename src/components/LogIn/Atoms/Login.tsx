import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const { palette } = useTheme();
  const mode = palette.mode;

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          marginY: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          borderRadius: 3,
          color: mode === "dark" ? "white" : "black",
        }}
        elevation={3}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography component="h1" variant="h5">
            Inicia sesion
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            color="secondary"
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
            color={"secondary"}
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Recordar mis datos"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar sesion
          </Button>
          <Grid container>
            <Grid item xs>
              <Link color="secondary" href="#" variant="body2">
                ¿Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link color="secondary" href="#" variant="body2">
                {"¿No tienes una cuenta?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

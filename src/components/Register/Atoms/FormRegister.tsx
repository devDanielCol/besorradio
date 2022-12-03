import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUserWithEmail } from "../../../firebases/auth/auth";
import { useForm } from "react-hook-form";
import DialogError from "../../LogIn/Atoms/DialogError";
import { WriteRegisterUserData } from "../../../firebases/db/auth/user";
import {
  correctEmail,
  correctPassword,
} from "../../../utils/helpers/RegexVerify";

interface FormData {
  email: string;
  emailConfirm: string;
  lastname: string;
  name: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  termsconditions: boolean;
}

const FormRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>();
  const [emailConfirmError, setEmailConfirmError] = useState<string>();
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [termsConditons, setTermsConditons] = useState<boolean>(false);

  const defaultErrorInfo = {
    button: "",
    content: "",
    open: false,
    title: "",
  };
  const [loginError, setLoginError] = useState(defaultErrorInfo);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name) {
        const inVal = value[name] as string;
        if (name === "email") {
          if (!inVal || !correctEmail(inVal)) {
            setEmailError("Ingrese un correo valido");
          } else {
            setEmailError(undefined);
          }
        } else if (name === "emailConfirm") {
          if (inVal !== value["email"]) {
            setEmailConfirmError("Correos no coinciden");
          } else {
            setEmailConfirmError(undefined);
          }
        }
        if (name === "password") {
          if (!inVal || !correctPassword(inVal)) {
            setPasswordError(
              "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
            );
          } else {
            setPasswordError(undefined);
          }
        } else if (name === "passwordConfirm") {
          if (inVal !== value["password"]) {
            setPasswordConfirmError("Contraseña no coincide");
          } else {
            setPasswordConfirmError(undefined);
          }
        } else if (!inVal) {
          return setError(name, {
            type: "required",
            message: "Este campo es requerido",
          });
        }
      }
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  const submitCapture = (formData: FormData) => {
    let statusForm = true;

    Object.values(formData).forEach((e) => {
      if (!e) {
        statusForm = false;
        return;
      }
    });

    if (!statusForm || !termsConditons) {
      setLoginError({
        button: "Entendido",
        content:
          "Para completar el registro debes llentar todos los campos correctamente",
        open: true,
        title: "Completa el formulario",
      });
      return;
    } else {
      void CreateUserWithEmail({
        email: formData.email,
        password: formData.password,
      })
        .then((data) => {
          setLoading(false);
          void WriteRegisterUserData({
            name: formData.name,
            lastname: formData.lastname,
            phone: formData.phone,
            userId: data.user.uid,
          })
            .then(() => {
              navigate("/profile");
            })
            .catch(() => {
              setLoginError({
                button: "Entendido",
                content: ` 
                Se logro crear tu cuenta pero los datos personales no fueron guardados,
                incia sesion con tu correo y contraseña y actualiza tus datos desde el perfil.`,
                open: true,
                title: "Ocurrio un error al registrar tus datos",
              });
            });
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

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        p: 3,
        borderRadius: "20px",
      }}
    >
      <DialogError
        {...loginError}
        handleClose={() => {
          setLoginError(defaultErrorInfo);
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Crea una cuenta nueva
        </Typography>
      </Box>
      <Box
        component="form"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(submitCapture)}
        noValidate
        sx={{ mt: 2 }}
      >
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              color="primary"
              required
              fullWidth
              id="name"
              label="Nombre"
              autoComplete="name"
              autoFocus
              {...register("name")}
            />
            <Typography color={"red"} sx={{ fontSize: "0.8rem" }}>
              <>{errors.name && errors.name.message}</>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              color={"primary"}
              label="Apellido"
              id="lastname"
              {...register("lastname")}
            />
            <Typography color={"red"} sx={{ fontSize: "0.8rem" }}>
              <>{errors.lastname && errors.lastname.message}</>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              color="primary"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              autoComplete="email"
              {...register("email")}
            />
            <Typography color={"red"} sx={{ fontSize: "0.8rem" }}>
              <>{emailError && emailError}</>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              color="primary"
              required
              fullWidth
              id="email-confirm"
              label="Confirmar Correo electrónico"
              autoComplete="email-confirm"
              {...register("emailConfirm")}
            />
            <Typography color={"red"} sx={{ fontSize: "0.8rem" }}>
              <>{emailConfirmError}</>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              color={"primary"}
              label="Contraseña"
              type={seePassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              {...register("password")}
            />
            <FormControlLabel
              id="termsConditions-label"
              sx={{ width: "fit-content" }}
              onClick={() => {
                setSeePassword(!seePassword);
              }}
              control={<Checkbox value="see-password" color="secondary" />}
              label="Mostrar Contraseñas"
            />
            <Typography color={"red"} sx={{ fontSize: "0.8rem" }}>
              <>{passwordError}</>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              color={"primary"}
              label="Confirmar contraseña"
              type={seePassword ? "text" : "password"}
              id="password-confirm"
              autoComplete="current-password-confirm"
              {...register("passwordConfirm")}
            />
            <Typography color={"red"} sx={{ fontSize: "0.8rem" }}>
              <>{passwordConfirmError}</>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              color={"primary"}
              label="Numero celular"
              type="tel"
              id="phone"
              autoComplete="current-phone"
              {...register("phone")}
            />
            <Typography color={"red"} sx={{ fontSize: "0.8rem" }}>
              <>{errors.phone && errors.phone.message}</>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              id="termsConditions-label"
              sx={{ width: "fit-content" }}
              control={
                <Checkbox
                  id="termsConditions"
                  value="terms-conditions"
                  color="secondary"
                  onClick={() => {
                    setTermsConditons(!termsConditons);
                  }}
                  {...register("termsconditions")}
                />
              }
              label="Acepto terminos y condiciones de uso"
            />
            <Typography color={"red"} sx={{ fontSize: "0.8rem" }}>
              <>{termsConditons ? "" : "Campo requerido *"}</>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                mt: 3,
                mb: 2,
                textTransform: "initial",
                p: 1.5,
                borderRadius: "12px",
                width: {
                  xs: "100%",
                  md: "40%",
                },
              }}
            >
              {loading ? (
                <CircularProgress color="inherit" size={"2rem"} />
              ) : (
                "Registrarse"
              )}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="text"
            sx={{
              p: 1,
              borderRadius: "12px",
              textTransform: "initial",
            }}
          >
            ¿Ya tienes una cuenta?
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormRegister;

import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, Box, Typography } from "@mui/material";
import stringToColor from "../../../utils/helpers/stringToColor";
import { useNavigate } from "react-router-dom";
import { VerifyUserInSession } from "../../../firebases/auth/auth";
import { User } from "firebase/auth";

const Account = () => {
  const [userData, setuserData] = React.useState<User>();

  const navigate = useNavigate();

  const AvatarProps = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  React.useEffect(() => {
    void VerifyUserInSession(
      (userData) => {
        setuserData(userData);
      },
      () => {
        setuserData(undefined);
      }
    );
  }, []);

  return (
    <>
      {userData ? (
        <Box
          onClick={() => {
            navigate("/profile");
          }}
          display="flex"
          flexDirection="row"
          p={2}
          alignItems="center"
          sx={{ cursor: "pointer" }}
        >
          {userData.photoURL ? (
            <Avatar
              src={userData.photoURL}
              alt={userData.displayName || "Sin nombre"}
            />
          ) : (
            <Avatar {...AvatarProps(userData.displayName || "Sin nombre")} />
          )}
          <Typography ml={1}>
            {userData.displayName || userData.email}
          </Typography>
        </Box>
      ) : (
        <Box
          onClick={() => {
            navigate("/login");
          }}
          display="flex"
          flexDirection="row"
          p={2}
          alignItems="center"
          sx={{ cursor: "pointer" }}
        >
          <AccountCircleIcon sx={{ width: 45, height: 45 }} />
          <Typography ml={1}>Iniciar sesion</Typography>
        </Box>
      )}
    </>
  );
};

export default Account;

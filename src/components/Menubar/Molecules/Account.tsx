import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, Box, Typography } from "@mui/material";
import stringToColor from "../../../utils/helpers/stringToColor";

interface IClientAccunt {
  name: string;
  profileImg: string | null;
}

const Account = () => {
  const onSession = false;
  const { name, profileImg }: IClientAccunt = {
    name: "Daniel Cubillos",
    profileImg:
      "https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228_960_720.jpg",
  };

  const AvatarProps = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <>
      {onSession ? (
        <Box display="flex" flexDirection="row" p={2} alignItems="center">
          {profileImg ? (
            <Avatar src={profileImg} alt={name} />
          ) : (
            <Avatar {...AvatarProps(name)} />
          )}
          <Typography ml={1}>{name}</Typography>
        </Box>
      ) : (
        <Box display="flex" flexDirection="row" p={2} alignItems="center">
          <AccountCircleIcon sx={{ width: 45, height: 45 }} />
          <Typography ml={1}>Iniciar sesion</Typography>
        </Box>
      )}
    </>
  );
};

export default Account;

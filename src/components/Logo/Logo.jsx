import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import logo from "../../../public/logo.png";
// eslint-disable-next-line react/prop-types
const Logo = ({ open }) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const userName = userData?.data?.name;
  return (
    <>
      <Avatar
        sx={{
          mx: "auto",
          mt: 1,
          mb: 1,
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          // border: "2px solid #",
          transition: ".25s",
        }}
        alt="Travis Howard"
        src={logo}
      />
      <Typography
        align="center"
        fontSize={open ? 17 : 0}
        sx={{ transition: ".25s", color: "#fff" ,  mb: 7, }}
      >
        {userName}
      </Typography>
    </>
  );
};

export default Logo;

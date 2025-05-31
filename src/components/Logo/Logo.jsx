import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
// eslint-disable-next-line react/prop-types
const Logo = ({ open }) => {
  return (
    <>
      <Avatar
        sx={{
          mx: "auto",
          mt: 1,
          mb: 1,
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          border: "2px solid gray",
          transition: ".25s",
        }}
        alt="Travis Howard"
        src="https://www.wonderslist.com/wp-content/uploads/2021/05/Anastasia-Knyazeva-worlds-most-beautiful-girl.jpg"
      />
      <Typography
        align="center"
        fontSize={open ? 17 : 0}
        sx={{ transition: ".25s", color: "#fff" }}
      >
        Moaz Karem
      </Typography>
      <Typography
        align="center"
        fontSize={open ? 15 : 0}
        sx={{ mb: 1, transition: ".25s", color: "#fff" }}
      >
        Admin
      </Typography>
    </>
  );
};

export default Logo;

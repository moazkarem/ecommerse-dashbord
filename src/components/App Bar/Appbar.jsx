import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";

import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";
const drawerWidth = 280;
// eslint-disable-next-line react/prop-types
const Appbar = ({ open, setOpen }) => {
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    // @ts-ignore
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const logoutHandeler = () => {
    localStorage.removeItem("userData");
    setTimeout(() => {
      location.replace("/login");
    }, 500);
    toast.success("Success Logout");
  };

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar sx={{ backgroundColor: "#0F1112", height: "100px" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
            // @ts-ignore
            color: "#CBCBE2",
          }}
        >
          <MenuIcon />
        </IconButton>

        <div className="flex justify-between items-center w-full">
          <h6 className="text-[#CBCBE2] text-[18px]">
            Welcome Again In Your Dashbord
          </h6>

          <button
            onClick={logoutHandeler}
            className="flex justify-center items-center gap-2 py-2 px-16 rounded-[8px] bg-[#ff0000cc] text-white text-[18px]"
          >
            <span>Logout</span>
            <san>
              {" "}
              <FiLogOut fontSize="20" />{" "}
            </san>
          </button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

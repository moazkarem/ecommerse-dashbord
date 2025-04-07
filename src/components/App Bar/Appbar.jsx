import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Stack from "@mui/material/Stack";
import { Avatar, Box, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { useTheme } from "@mui/material/styles";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const drawerWidth = 240;
// eslint-disable-next-line react/prop-types
const Appbar = ({ open, setOpen, setMode }) => {
  const theme = useTheme();
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

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar sx={{ backgroundColor: "#2A2B40" }}>
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h4" color={"#CBCBE2"}>
            Logo
          </Typography>
          <Stack direction={"row"}>
            {theme.palette.mode === "light" ? (
              <IconButton
                // @ts-ignore
                sx={{ color: "#CBCBE2" }}
                onClick={() => {
                  localStorage.setItem(
                    "colorScheme",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
              >
                <Brightness4Icon />
              </IconButton>
            ) : (
              <IconButton
                // @ts-ignore
                sx={{ color: "#CBCBE2" }}
                onClick={() => {
                  localStorage.setItem(
                    "colorScheme",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            )}

            <IconButton
              sx={{
                // @ts-ignore
                color: "#CBCBE2",
                marginRight: "30px",
                marginLeft: "20px",
              }}
            >
              <NotificationsOutlinedIcon />
            </IconButton>

            <Avatar
              sizes="medium"
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
            />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

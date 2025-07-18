import { useState } from "react";
import List from "@mui/material/List";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useLocation, useNavigate } from "react-router-dom";
import { Sidedata } from "../../data/data";
import Logo from "../Logo/Logo";

const drawerWidth = 280;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#0F1112",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#0F1112",
    },
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// eslint-disable-next-line react/prop-types
const Sidebar = ({ open, setOpen }) => {
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [openAccordion, setOpenAccordion] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <MdKeyboardArrowRight />
          ) : (
            <MdKeyboardArrowLeft color="#fff" />
          )}
        </IconButton>
      </DrawerHeader>
      <Logo open={open} />
      <List>
        {Sidedata.map((item, index) => {
          const hasChildren = item.pages && item.pages.length > 0;
          const isAccordionOpen = openAccordion[index] || false;

          return (
            <div key={index}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() =>
                    hasChildren ? toggleAccordion(index) : navigate(item.path)
                  }
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? "#ff0000cc"
                          : "#ff0000cc"
                        : null,
                    color: "#fff",
                    mb: "15px",
                    width: "95%",
                    mx: "auto",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#232425",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {hasChildren &&
                    (isAccordionOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>

              {/* Nested Items */}
              {hasChildren && (
                <Collapse in={isAccordionOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.pages.map((sub, idx) => (
                      <ListItem
                        key={idx}
                        disablePadding
                        sx={{ display: "block", pl: 2 }}
                      >
                        <ListItemButton
                          onClick={() => navigate(sub.path)}
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            bgcolor:
                              pathname === sub.path
                                ? theme.palette.mode === "dark"
                                  ? "#ff0000cc"
                                  : "#ff0000cc"
                                : null,
                            color: "#fff",
                            mb: "15px",
                         
                            width: "95%",
                            mx: "auto",
                            borderRadius: "8px",
                            "&:hover": {
                              backgroundColor: "#232425",
                             pl:3
                            },
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                              color: "#fff",
                            }}
                          >
                            {sub.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={sub.title}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;

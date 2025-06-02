import InboxIcon from "@mui/icons-material/MoveToInbox";
import { CiLock } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
export const Sidedata = [
  {
    path: "/",
    title: "Dashboard",
    icon: <InboxIcon />,
  },
  {
    path: "/categories",
    title: "Categories",
    icon: <InboxIcon />,
  },
];


export const signIn = [
  {
    type: "email",
    name: "email",
    label: "Email",
    icon: MdOutlineMarkEmailRead,
  },
  { type: "password", name: "password", label: "Password", icon: CiLock },
];
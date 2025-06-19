import InboxIcon from "@mui/icons-material/MoveToInbox";
import { CiLock } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
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
  {
    path: "/brands",
    title: "Brands",
    icon: <InboxIcon />,
  },
  {
    path: "/coupons",
    title: "Coupons",
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

//==================== CATEGORIES =======

export const addCategoriesFields = [
  {
    name: "name",
    type: "text",
    label: "Category Name",
  },
  {
    name: "image",
    type: "file",
    label: "Category Image",
  },
];

//==================== CATEGORIES =======

export const addBrandsFields = [
  {
    name: "name",
    type: "text",
    label: "Brand Name",
  },
  {
    name: "image",
    type: "file",
    label: "Brand Image",
  },
];

export const addCouponsFields = [
  {
    name: "name",
    type: "text",
    label: "Coupon Name",
  },
  {
    name: "expire",
    type: "date",
    label: "Expire Date",
  },
  {
    name: "discount",
    type: "number",
    label: "Discount Date",
  },
];

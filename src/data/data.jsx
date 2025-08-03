import { CiLock } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { TbBrandAngularFilled } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { TbReorder } from "react-icons/tb";
import { BiLogoProductHunt } from "react-icons/bi";
// import { FiLogOut } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { BsListNested } from "react-icons/bs";
import { FaBloggerB, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { MdAddToHomeScreen } from "react-icons/md";
import { FaPager } from "react-icons/fa6";
export const Sidedata = [
  {
    path: "/",
    title: "Dashboard",
    icon: <FaHome fontSize="20" />,
  },
  {
    path: "/pages",
    title: "Front Pages",
    icon: <FaPager fontSize="20" />,
    pages: [
      {
        path: "/pages/homepage",
        title: "Home Page",
        icon: <MdAddToHomeScreen fontSize="20" />,
      },
      {
        path: "/pages/about",
        title: "About Page",
        icon: <FaInfoCircle fontSize="20" />,
      },
      {
        path: "/pages/blogs",
        title: "Blogs Page",
        icon: <FaBloggerB fontSize="20" />,
      },
      {
        path: "/pages/contact",
        title: "Contact Page",
        icon: <FaEnvelope fontSize="20" />,
      },
    ],
  },
  {
    path: "/products",
    title: "Products",
    icon: <BiLogoProductHunt fontSize="20" />,
  },
  {
    path: "/categories",
    title: "Categories",
    icon: <TbCategoryFilled fontSize="20" />,
  },
  {
    path: "/categories/subcategories",
    title: "Sub Categorie",
    icon: <BsListNested fontSize="20" />,
  },
  {
    path: "/brands",
    title: "Brands",
    icon: <TbBrandAngularFilled fontSize="20" />,
  },
  {
    path: "/coupons",
    title: "Coupons",
    icon: <MdDiscount fontSize="20" />,
  },
  {
    path: "/orders",
    title: "Orders",
    icon: <TbReorder fontSize="20" />,
  },
  {
    path: "/users",
    title: "Users",
    icon: <FaUserFriends fontSize="20" />,
  },
  {
    path: "/reviews",
    title: "Reviews",
    icon: <MdRateReview fontSize="20" />,
  },
  // {
  //   path: "/login",
  //   title: "Logout",
  //   icon: <FiLogOut fontSize="20" />,
  // },
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
//==================== COUPONS =======

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

//==================== USERS =======

export const userFields = [
  {
    name: "name",
    type: "text",
    label: "User Name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
  },
  {
    name: "passwordConfirm",
    type: "password",
    label: "Password Confirm",
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone",
  },
  {
    name: "role",
    type: "text",
    label: "Role",
  },
];

export const userEditFields = [
  {
    name: "name",
    type: "text",
    label: "User Name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
  },

  {
    name: "phone",
    type: "tel",
    label: "Phone",
  },
  {
    name: "role",
    type: "text",
    label: "Role",
  },
];

//==================== Products =======

export const productsFields = [
  {
    name: "title",
    type: "text",
    label: "Product Title",
    isSelect: false,
    isImages: false,
  },
  {
    name: "description",
    type: "text",
    label: "Description",
    isSelect: false,
    isImages: false,
  },
  {
    name: "quantity",
    type: "number",
    label: "quantity",
    isSelect: false,
    isImages: false,
  },
  {
    name: "price",
    type: "number",
    label: "price",
    isSelect: false,
    isImages: false,
  },
  {
    name: "availableColors",
    type: "color",
    label: "availableColors",
    isSelect: false,
    isImages: false,
  },
  {
    name: "imageCover",
    type: "file",
    label: "Image Cover",
    isSelect: false,
    isImages: false,
  },
  {
    name: "images",
    type: "file",
    label: "Images",
    isSelect: false,
    isImages: true,
  },
  {
    name: "category",
    label: "Categorys",
    isSelect: true,
    isImages: false,
  },
  {
    name: "brand",
    label: "Brands",
    isSelect: true,
    isImages: false,
  },
];

// ============ REVIEWS

export const reviewsFields = [
  {
    name: "review",
    label: "review",
    isTextArea: true,
  },
  {
    name: "rating",
    label: "rating",
    isTextArea: false,
    type: "number",
  },
];

//==================== CATEGORIES =======
export const subCategoriesFields = [
  {
    name: "name",
    label: "name",
    type: "text",
  },
  {
    name: "category",
    label: "category",
    isSelect: true,
  },
];

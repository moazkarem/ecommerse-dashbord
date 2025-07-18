import { FaUserFriends } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { BsListNested } from "react-icons/bs";
export const homeData = [
  {
    path: "/pages/homepage/hero",
    title: "Hero Section",
    icon: <FaUserFriends />,
  },
  {
    path: "/pages/homepage/banner1",
    title: "Banner One",
    icon: <MdRateReview />,
  },
  {
    path: "/pages/homepage/banner2",
    title: "Banner Two",
    icon: <BsListNested />,
  },
];

export const HeroData = [
  {
    name: "image",
    type: "file",
    label: "Slider Image",
    col: 12,
  },
  {
    name: "title",
    type: "text",
    label: "Title",
    col: 12,
  },
  {
    name: "description",
    isEditor: true,
    label: "Description",
    col: 12,
  },
  {
    name: "oldPrice",
    type: "number",
    label: "Old Price",
    col: 12,
  },
  {
    name: "newPrice",
    type: "number",
    label: "New Pric",
    col: 12,
  },
];

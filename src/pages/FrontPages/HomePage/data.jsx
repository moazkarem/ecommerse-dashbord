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

import { MdDelete } from "react-icons/md";

export const getCategoryColumns = () => [
  {
    field: "title",
    headerName: "Title",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (row) => (
      <img src={import.meta.env.VITE_SECOND_DOMAIN / `${row?.row?.image}`} />
    ),
  },

  {
    field: "delete",
    headerName: "Delete",
    flex: 1,
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: () => (
      <button
        style={{ lineHeight: "32px" }}
       
      >
        <MdDelete className="text-[#ff0000cc] text-[20px]" />
      </button>
    ),
  },
];

export const style = {
  backgroundColor: "#1E2021",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#1E2021",
    color: "#fff",
  },
  "& .MuiDataGrid-cell": { backgroundColor: "#1E2021", color: "#fff" },
  "& .MuiDataGrid-row:hover": { backgroundColor: "#1E2021 !important" },
  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "#1E2021 !important",
  },
  "& .MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: "#1E2021 !important",
  },
};

import { MdDelete } from "react-icons/md";

export const getCategoryColumns = ({ onDelete, onView }) => [
  {
    field: "name",
    headerName: "Name",
    width: 150,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "email",
    headerName: "Email",
    width: 150,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "View",
    headerName: "View",
    flex: 1,
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (brand) => (
      <button style={{ lineHeight: "32px" }} onClick={() => onView(brand.row)}>
        <MdDelete className="text-[#00fff2cc] text-[20px]" />
      </button>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    flex: 1,
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (brand) => (
      <button
        style={{ lineHeight: "32px" }}
        onClick={() => onDelete(brand.row)}
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



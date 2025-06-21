import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
export const getCategoryColumns = ({ onEdit, onDelete }) => [
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
    field: "role",
    headerName: "Role",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "active",
    headerName: "Active",
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (row) => (
      <span>{row?.row?.active ? "Active" : "Not Active"}</span>
    ),
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (user) => (
      <button style={{ lineHeight: "32px" }} onClick={() => onEdit(user.row)}>
        <FaEdit color="#008000" className="text-[20px]" />
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
    renderCell: (user) => (
      <button style={{ lineHeight: "32px" }} onClick={() => onDelete(user.row)}>
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

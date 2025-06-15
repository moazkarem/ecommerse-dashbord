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
    field: "image",
    headerName: "Image",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: () => (
      <button
        style={{ lineHeight: "32px" }}
        onClick={onEdit}
      >
       <FaEdit />
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
    renderCell: () => (
      <button
        style={{ lineHeight: "32px" }}
        onClick={onDelete}
      >
       <MdDelete color=""/>
      </button>
    ),
  },
];

export const style = {
  backgroundColor: "#232333",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#232333",
    color: "#fff",
  },
  "& .MuiDataGrid-cell": { backgroundColor: "#232333", color: "#fff" },
  "& .MuiDataGrid-row:hover": { backgroundColor: "#232333 !important" },
  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "#232333 !important",
  },
  "& .MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: "#232333 !important",
  },
}
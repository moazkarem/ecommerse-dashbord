import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { formatedDate } from "../../helpers/functions";

export const getCategoryColumns = ({ onEdit, onDelete }) => [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "expire",
    headerName: "Expire Date",
    width: 250,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (row) => <span>{formatedDate(row.row.expire)}</span>,
  },

  {
    field: "discount",
    headerName: "Discount",
    width: 80,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 50,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (coupon) => (
      <button style={{ lineHeight: "32px" }} onClick={() => onEdit(coupon.row)}>
        <FaEdit color="#008000" className="text-[20px]" />
      </button>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    flex: 1,
    width: 50,
    align: "center",
    headerAlign: "center",
    renderCell: (coupon) => (
      <button
        style={{ lineHeight: "32px" }}
        onClick={() => onDelete(coupon.row)}
      >
        <MdDelete className="text-[#ff0000cc] text-[20px]" />
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
};

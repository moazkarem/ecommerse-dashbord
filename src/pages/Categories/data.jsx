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
        className="border rounded-[7px] h-8 border-[#71dd37] px-12 text-center"
      >
        Edit
      </button>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: () => (
      <button
        style={{ lineHeight: "32px" }}
        onClick={onDelete}
        className="border rounded-[7px] h-8 border-[#f00] px-12 text-center"
      >
        Delete
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
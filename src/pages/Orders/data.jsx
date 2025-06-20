import { FaCcAmazonPay } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaEye } from "react-icons/fa";
export const getCategoryColumns = ({ onEdit, onDelete, onView }) => [
  {
    field: "shippingAddress",
    headerName: "Shipping Address",
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (row) => <span>{row?.row?.shippingAddress?.city}</span>,
  },
  {
    field: "user",
    headerName: "User",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (row) => <span>{row?.row?.user?.name}</span>,
  },

  {
    field: "isPaid",
    headerName: "Paid",
    // width: 80,
    flex: 1,
    align: "center",
    headerAlign: "center",

    renderCell: (row) => (
      <span
        className={`px-4 py-[3px] border rounded-[8px] whitespace-nowrap ${
          row?.row?.isPaid ? "text-[#008000]" : "text-[#ed1d24]"
        }`}
      >
        {row?.row?.isPaid ? "Done" : "Pending"}
      </span>
    ),
  },
  {
    field: "isDelivered",
    headerName: "Delivered",
    // width: 80,
    flex: 1,
    align: "center",
    headerAlign: "center",

    renderCell: (row) => (
      <span
        className={`px-4 py-[3px] border rounded-[8px] whitespace-nowrap ${
          row?.row?.isDelivered ? "text-[#008000]" : "text-[#ed1d24]"
        }`}
      >
        {row?.row?.isDelivered ? "Done" : "Pending"}
      </span>
    ),
  },
  {
    field: "View",
    headerName: "View",
    width: 50,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (order) => (
      <button style={{ lineHeight: "32px" }} onClick={() => onView(order.row)}>
        <FaEye className="text-[20px]" />
      </button>
    ),
  },
  {
    field: "Paymeny",
    headerName: "Update Payment",
    // width: 350,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (order) => (
      <button style={{ lineHeight: "32px" }} onClick={() => onEdit(order.row)}>
        <FaCcAmazonPay color="#008000" className="text-[20px]" />
      </button>
    ),
  },
  {
    field: "updateDelevery",
    headerName: "Update Delevert",
    flex: 1,
    width: 50,
    align: "center",
    headerAlign: "center",
    renderCell: (order) => (
      <button
        style={{ lineHeight: "32px" }}
        onClick={() => onDelete(order.row)}
      >
        <MdLocalShipping className="text-[#ff0000cc] text-[20px]" />
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

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import img1 from "../../../../public/images/brands/img1.png";
import img2 from "../../../../public/images/brands/img3.png";
import img3 from "../../../../public/images/brands/img3.png";
import img4 from "../../../../public/images/brands/img4.png";
import img5 from "../../../../public/images/brands/img5.png";
import img6 from "../../../../public/images/brands/img6.png";
import img7 from "../../../../public/images/brands/img7.png";
import img9 from "../../../../public/images/brands/img9.png";
import img10 from "../../../../public/images/brands/img10.png";

export const images = [img1, img2, img3, img4, img5, img6, img7, img9, img10];
export const getCategoryColumns = ({ onDelete , onEdit }) => [
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

    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (row) =>{
      console.log(`${import.meta.env.VITE_IMAGE_DOMAIN}${row?.row?.image?.url}` , 'my ro');
      return (
        <div className="w-full flex justify-center ">
          <img
            className="w-12 h-12 object-contain p-2"
            src={`${import.meta.env.VITE_IMAGE_DOMAIN}${row?.row?.image?.url}`}
          />
        </div>
      )
    }
      
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (brand) => (
      <button
        style={{ lineHeight: "32px" }}
        onClick={() => onEdit(brand.row)}
      >
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

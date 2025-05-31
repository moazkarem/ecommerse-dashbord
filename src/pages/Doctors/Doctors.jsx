import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import AddDoctor from "./AddDoctor/AddDoctor";
import { useState } from "react";
import EditDoctor from "./Edit Doctor/EditDoctor";
import DelDoctor from "./Delete Doctor/DelDoctor";

const Doctors = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => setIsOpen(true);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const closeModalEdit = () => setIsOpenEdit(false);
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);

  const openModalDel = () => {
    setIsOpenDel(true);
  };
  const openModalEdit = () => {
    setIsOpenEdit(true);
  };

  const rows = [
    {
      id: 1,
      name: "Khloud",
      email: "Khloud@jmail.com",
      age: 18,
      phone: "(656)121-5454",
    },
    {
      id: 2,
      name: "Zead",
      email: "Zead@jmail.com",
      age: 20,
      phone: "(751)153-5454",
    },
    {
      id: 3,
      name: "Khalid",
      email: "Khalid@jmail.com",
      age: 43,
      phone: "(951)153-953",
    },
    {
      id: 4,
      name: "Mohamed",
      email: "Mohamed@jmail.com",
      age: 35,
      phone: "(656)121-5454",
    },
    {
      id: 5,
      name: "Mai",
      email: "Mai@jmail.com",
      age: 28,
      phone: "(950)753-5454",
    },
    {
      id: 6,
      name: "Amal",
      email: "Amal@jmail.com",
      age: 60,
      phone: "(325)789-1244",
    },
    {
      id: 7,
      name: "Noha",
      email: "Noha@jmail.com",
      age: 14,
      phone: "(919)318-6451",
    },
    {
      id: 8,
      name: "Ayman",
      email: "Ayman@jmail.com",
      age: 23,
      phone: "(721)321-5412",
    },
    {
      id: 9,
      name: "Mostafa",
      email: "Mosataf@jmail.com",
      age: 45,
      phone: "(957)156-4278",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
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
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
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
          onClick={() => openModalEdit()}
          className="border rounded-[7px] h-8   border-[#71dd37] px-12 text-center "
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
        <div className=" ">
          <button
            style={{ lineHeight: "32px" }}
            onClick={() => openModalDel()}
            className="border rounded-[7px] h-8   border-[#f00] px-12 text-center"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: "95%", mx: "auto" }}>
      <TitlePage path={"Dashbord/Users / "} page={"Doctors"} />
      <AddButton add={openModal} title={"Add New Doctor"} />
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          backgroundColor: "#232333",

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#232333",
            color: "#fff",
          },

          "& .MuiDataGrid-cell": {
            backgroundColor: "#232333",
            color: "#fff",
          },

          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#232333 !important",
          },

          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "#232333 !important",
          },

          "& .MuiDataGrid-row.Mui-selected:hover": {
            backgroundColor: "#232333 !important",
          },
        }}
      />
      <AddDoctor
        title={"Add New Doctor"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditDoctor
        title={"Edit Doctor Information"}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
      />
      <DelDoctor isOpen={isOpenDel} closeModal={closeModalDel} />
    </Box>
  );
};

export default Doctors;

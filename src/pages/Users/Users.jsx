import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryColumns, style } from "./data";
import { useGetUsers } from "../../hooks/useUser";
import { setUsersAction } from "../../store/features/usersSlice";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import DelUser from "./DelBrand";

const Users = () => {
  //===================== MODAL STATES ===========
  const [deletedUser, setDeletedUser] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalEdit = (selectedBrand) => {
    setIsOpenEdit(true);
    setEditedUser(selectedBrand);
  };
  const closeModalEdit = () => setIsOpenEdit(false);

  const openModalDel = (selectedBrand) => {
    setIsOpenDel(true);
    setDeletedUser(selectedBrand);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const dispatch = useDispatch();
  const { data: users, isLoading } = useGetUsers();

  useEffect(() => {
    if (users?.data) {
      dispatch(setUsersAction(users?.data?.data));
    }
  }, [users, dispatch]);

  const columns = getCategoryColumns({
    onEdit: openModalEdit,
    onDelete: openModalDel,
  });

  const rows = users?.data?.data.map((brand, index) => ({
    ...brand,
    id: brand._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Users"} />
      <AddButton add={openModal} title={"Add New User"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddUser title={"Add New User"} isOpen={isOpen} closeModal={closeModal} />
      <EditUser
        key={editedUser._id}
        title={"Edit User "}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedUser={editedUser}
      />
      <DelUser
        key={deletedUser._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedUser={deletedUser}
      />
    </Box>
  );
};

export default Users;

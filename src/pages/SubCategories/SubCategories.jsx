import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import DelCategory from "./DelCategory";
import Loading from "../../components/Loading/Loading";
import {  useState } from "react";
import { UseGetSubCategories } from "../../hooks/useSubCategories";
import { getCategoryColumns, style } from "./data";

const SubCategories = () => {
  //===================== MODAL STATES ===========
  const [deletedCat, setDeletedCat] = useState({});
  const [editedCat, setEditedCat] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalEdit = (selectedCate) => {
    setIsOpenEdit(true);
    setEditedCat(selectedCate);
  };
  const closeModalEdit = () => setIsOpenEdit(false);

  const openModalDel = (selectedCate) => {
    setIsOpenDel(true);
    setDeletedCat(selectedCate);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const { data: subCategories, isLoading } = UseGetSubCategories();
  const columns = getCategoryColumns({
    onEdit: openModalEdit,
    onDelete: openModalDel,
  });

  const rows = subCategories?.data?.data.map((cat, index) => ({
    ...cat,
    id: cat._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Categories"} />
      <AddButton add={openModal} title={"Add New Category"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddCategory
        title={"Add New Category"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditCategory
        key={editedCat?._id} //To force the component to update with the new object.
        title={"Edit Category Information"}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedCat={editedCat}
      />
      <DelCategory
        key={deletedCat._id} //To force the component to update with the new object.
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedCat={deletedCat}
      />
    </Box>
  );
};

export default SubCategories;

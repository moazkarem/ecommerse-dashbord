import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import Loading from "../../components/Loading/Loading";
import {  useState } from "react";
import { UseGetSubCategories } from "../../hooks/useSubCategories";
import { getCategoryColumns, style } from "./data";
import DelSubCategory from "./DelSubCategory";
import AddSubCategory from './AddSubCategory';
import EditSubCategory from "./EditSubCategory";

const SubCategories = () => {
  //===================== MODAL STATES ===========
  const [deletedSubCat, setDeletedSubCat] = useState({});
  const [editedSubCat, setEditedSubCat] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalEdit = (selectedCate) => {
    setIsOpenEdit(true);
    setEditedSubCat(selectedCate);
  };
  const closeModalEdit = () => setIsOpenEdit(false);

  const openModalDel = (selectedCate) => {
    setIsOpenDel(true);
    setDeletedSubCat(selectedCate);
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
      <TitlePage path={"Dashbord / "} page={"Sub Categories"} />
      <AddButton add={openModal} title={"Add New Sub Category"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddSubCategory
        title={"Add New Sub Category"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditSubCategory
        key={editedSubCat?._id} //To force the component to update with the new object.
        title={"Edit Sub Category Information"}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedSubCat={editedSubCat}
      />
      <DelSubCategory
        key={deletedSubCat._id} //To force the component to update with the new object.
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedSubCat={deletedSubCat}
      />
    </Box>
  );
};

export default SubCategories;

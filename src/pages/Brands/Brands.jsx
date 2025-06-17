import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import AddDoctor from "./AddBrand";
import EditDoctor from "./EditBrand";
import DelDoctor from "./DelBrand";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoriesAction } from "../../features/categoriesSlice";
import { useGetCategories } from "../../hooks/useCategories";
import { getCategoryColumns, style } from "./data";
import { useGetBrands } from "../../hooks/useBrands";

const Brands = () => {
  //===================== MODAL STATES ===========
  const [deletedCat , setDeletedCat] = useState({})
  const [editedCat , setEditedCat] = useState({})
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalEdit = (selectedCate) => {
    setIsOpenEdit(true);
    setEditedCat(selectedCate)
  }  
  const closeModalEdit = () => setIsOpenEdit(false);

  const openModalDel = (selectedCate) => {
    setIsOpenDel(true)
    setDeletedCat(selectedCate)
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const dispatch = useDispatch();
  const { data: categories, isLoading } = useGetBrands();

  useEffect(() => {
    if (categories?.data) {
      dispatch(setCategoriesAction(categories?.data?.data));
    }
  }, [categories]);

  const columns = getCategoryColumns({
    onEdit: openModalEdit,
    onDelete: openModalDel,
  });

  const rows = categories?.data?.data.map((cat, index) => ({
    ...cat,
    id: cat._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Categories"} />
      <AddButton add={openModal} title={"Add New Category"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddDoctor
        title={"Add New Doctor"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditDoctor
        title={"Edit Category Information"}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedCat={editedCat}
      />
      <DelDoctor isOpen={isOpenDel} closeModal={closeModalDel} deletedCat={deletedCat} />
    </Box>
  );
};

export default Brands;

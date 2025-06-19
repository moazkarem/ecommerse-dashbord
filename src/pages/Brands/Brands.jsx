import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import AddDoctor from "./AddBrand";
import EditDoctor from "./EditBrand";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoriesAction } from "../../features/categoriesSlice";
import { getCategoryColumns, style } from "./data";
import { useGetBrands } from "../../hooks/useBrands";
import DelBrand from "./DelBrand";

const Brands = () => {
  //===================== MODAL STATES ===========
  const [deletedBrand, setDeletedBrand] = useState({});
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

  const openModalDel = (selectedBrand) => {
    setIsOpenDel(true);
    setDeletedBrand(selectedBrand);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const dispatch = useDispatch();
  const { data: brands, isLoading } = useGetBrands();

  useEffect(() => {
    if (brands?.data) {
      dispatch(setCategoriesAction(brands?.data?.data));
    }
  }, [brands, dispatch]);

  const columns = getCategoryColumns({
    onEdit: openModalEdit,
    onDelete: openModalDel,
  });

  const rows = brands?.data?.data.map((brand, index) => ({
    ...brand,
    id: brand._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Brands"} />
      <AddButton add={openModal} title={"Add New Brand"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddDoctor
        title={"Add New Brand"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditDoctor
        title={"Edit Brand "}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedCat={editedCat}
      />
      <DelBrand
        key={deletedBrand._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedBrand={deletedBrand}
      />
    </Box>
  );
};

export default Brands;

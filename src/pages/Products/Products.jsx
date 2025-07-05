import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryColumns, style } from "./data";
import { useGetProducts } from "../../hooks/useProducts";
import EditProduct from "./EditProduct";
import { setProductsAction } from "../../store/features/productsSlice";
import DelProduct from "./DelProduct";
import AddProduct from "./AddProduct";

const Products = () => {
  //===================== MODAL STATES ===========
  const [deletedProduct, setDeletedProduct] = useState({});
  const [editedProduct, setEditedProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalEdit = (selectedBrand) => {
    setIsOpenEdit(true);
    setEditedProduct(selectedBrand);
  };
  const closeModalEdit = () => setIsOpenEdit(false);

  const openModalDel = (selectedBrand) => {
    setIsOpenDel(true);
    setDeletedProduct(selectedBrand);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const dispatch = useDispatch();
  const { data: products, isLoading } = useGetProducts();

  useEffect(() => {
    if (products?.data) {
      dispatch(setProductsAction(products?.data?.data));
    }
  }, [products, dispatch]);

  const columns = getCategoryColumns({
    onEdit: openModalEdit,
    onDelete: openModalDel,
  });

  const rows = products?.data?.data.map((brand, index) => ({
    ...brand,
    id: brand._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Products"} />
      <AddButton add={openModal} title={"Add New Product"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddProduct
        title={"Add New Product"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditProduct
        key={editedProduct._id}
        title={"Edit Brand "}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedProduct={editedProduct}
      />
      <DelProduct
        key={deletedProduct._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedProduct={deletedProduct}
      />
    </Box>
  );
};

export default Products;

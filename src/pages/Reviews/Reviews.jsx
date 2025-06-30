import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryColumns, style } from "./data";
import { useGetAllReviews } from "../../hooks/useReviews";
import DelBrand from "./DelBrand";
import EditBrand from "./EditBrand";
import { setBrandsAction } from "../../store/features/brandsSlice";
import AddBrand from "./AddBrand";

const Reviews = () => {
  //===================== MODAL STATES ===========
  const [deletedBrand, setDeletedBrand] = useState({});
  const [editedBrand, setEditedBrand] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalEdit = (selectedBrand) => {
    setIsOpenEdit(true);
    setEditedBrand(selectedBrand);
  };
  const closeModalEdit = () => setIsOpenEdit(false);

  const openModalDel = (selectedBrand) => {
    setIsOpenDel(true);
    setDeletedBrand(selectedBrand);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const dispatch = useDispatch();
  const { data: reviews, isLoading } = useGetAllReviews();

  // useEffect(() => {
  //   if (reviews?.data) {
  //     dispatch(setreviewsAction(reviews?.data?.data));
  //   }
  // }, [reviews, dispatch]);

  const columns = getCategoryColumns({
    onEdit: openModalEdit,
    onDelete: openModalDel,
  });

  const rows = reviews?.data?.data.map((review, index) => ({
    ...review,
    id: review._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Brands"} />
      <AddButton add={openModal} title={"Add New Brand"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddBrand
        title={"Add New Brand"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditBrand
      key={editedBrand._id}
        title={"Edit Brand "}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedBrand={editedBrand}
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

export default Reviews;

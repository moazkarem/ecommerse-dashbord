import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";
import { getCategoryColumns, style } from "./data";
import { useGetAllReviews } from "../../hooks/useReviews";
import DelReview from "./DelReview";
const Reviews = () => {
  //===================== MODAL STATES ===========
  const [deletedReview, setDeletedReview] = useState({});
  const [isOpenDel, setIsOpenDel] = useState(false);
  const openModalDel = (selectedBrand) => {
    setIsOpenDel(true);
    setDeletedReview(selectedBrand);
  };
  const closeModalDel = () => setIsOpenDel(false);
  //===================== DATA AND API ===========
  const { data: reviews, isLoading } = useGetAllReviews();
  const columns = getCategoryColumns({
    onDelete: openModalDel,
  });

  const rows = reviews?.data?.data.map((review, index) => ({
    ...review,
    id: review._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Reviews"} />
      <DataGrid rows={rows} columns={columns} sx={style} />

      <DelReview
        key={deletedReview._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedReview={deletedReview}
      />
    </Box>
  );
};

export default Reviews;

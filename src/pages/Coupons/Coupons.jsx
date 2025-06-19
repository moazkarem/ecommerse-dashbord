import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryColumns, style } from "./data";
import { useGetCoupons } from "../../hooks/useCoupons";
import EditBrand from "./EditBrand";
import { setCouponsAction } from "../../features/couponsSlice";
import AddCoupon from "./AddCoupon";
import DelCoupon from "./DelCoupon";

const Coupons = () => {
  //===================== MODAL STATES ===========
  const [deletedCoupon, setDeletedCoupon] = useState({});
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

  const openModalDel = (selectedCoupon) => {
    setIsOpenDel(true);
    setDeletedCoupon(selectedCoupon);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const dispatch = useDispatch();
  const { data: coupons, isLoading } = useGetCoupons();

  useEffect(() => {
    if (coupons?.data) {
      dispatch(setCouponsAction(coupons?.data?.data));
    }
  }, [coupons, dispatch]);

  const columns = getCategoryColumns({
    onEdit: openModalEdit,
    onDelete: openModalDel,
  });

  const rows = coupons?.data?.data.map((coupon, index) => ({
    ...coupon,
    id: coupon._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Coupons"} />
      <AddButton add={openModal} title={"Add New Coupon"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddCoupon
        title={"Add New Coupon"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditBrand
        title={"Edit Brand "}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedBrand={editedBrand}
      />
      <DelCoupon
        key={deletedCoupon._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedCoupon={deletedCoupon}
      />
    </Box>
  );
};

export default Coupons;

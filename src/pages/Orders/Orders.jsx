import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryColumns, style } from "./data";
import { useGetOrders } from "../../hooks/useOrders";
import EditPayment from "./EditPayment";
import AddCoupon from "./AddCoupon";
import { setOrdersAction } from "../../store/features/ordersSlice";
import EditDelevery from "./EditDelevery";

const Orders = () => {
  //===================== MODAL STATES ===========
  const [editedDeliverOrder, setEditedDeliverOrder] = useState({});
  const [editedOrder, setEditedOrder] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalEdit = (selectedOrder) => {
    setIsOpenEdit(true);
    setEditedOrder(selectedOrder);
  };
  const closeModalEdit = () => setIsOpenEdit(false);

  const openModalDel = (selectedOrder) => {
    setIsOpenDel(true);
    setEditedDeliverOrder(selectedOrder);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //===================== DATA AND API ===========
  const dispatch = useDispatch();
  const { data: orders, isLoading } = useGetOrders();

  useEffect(() => {
    if (orders?.data) {
      dispatch(setOrdersAction(orders?.data?.data));
    }
  }, [orders, dispatch]);

  const columns = getCategoryColumns({
    onEdit: openModalEdit,
    onDelete: openModalDel,
  });

  const rows = orders?.data?.data.map((order, index) => ({
    ...order,
    id: order._id || index,
  }));

  if (isLoading) return <Loading />;
  return (
    <Box sx={{ height: 600, width: "85%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Orders"} />
      <AddButton add={openModal} title={"Add New Order"} />
      <DataGrid rows={rows} columns={columns} sx={style} />
      <AddCoupon
        title={"Add New Coupon"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <EditPayment
        key={editedOrder._id}
        title={"Edit Payment Status ?  "}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editedOrder={editedOrder}
      />
      <EditDelevery
        key={editedDeliverOrder._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        editedDeliverOrder={editedDeliverOrder}
      />
    </Box>
  );
};

export default Orders;

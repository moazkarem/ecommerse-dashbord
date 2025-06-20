import Modal from "../../Ui/Modal";
import Button from "../../Ui/Button";
import { useForm } from "react-hook-form";
import { useUpdatePayment } from "../../hooks/useOrders";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
const EditPayment = ({ isOpenEdit, closeModalEdit, title, editedOrder }) => {
  const { isPending, mutate } = useUpdatePayment();
  const queryClient = useQueryClient();
  const { handleSubmit } = useForm({});

  const onSubmit = () => {
    const couponId = editedOrder._id;
    mutate(couponId, {
      onSuccess: () => {
        toast.success("Order Payment Statue Updated successfully");
        queryClient.invalidateQueries(["coupons"]);
        closeModalEdit();
      },
      onError: (error) => {
        toast.error(
          "An Error occurred, Order Payment Statue Updated was not Updated"
        );
        console.log(error.message, "error from edit category");
      },
    });
  };

  return (
    <div>
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-3">
              <Button
                loading={isPending}
                style={`mt-4  text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1 py-[6px] flex justify-center items-center rounded-[8px]`}
              >
                Update
              </Button>
              <Button
                onClick={() => closeModalEdit()}
                type="button"
                style={`border-[#798594] text-[#dbdbebde]  mt-4   border w-48 px-12 border-1  py-[6px] rounded-[8px]`}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditPayment;

import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import { addCouponsFields } from "../../data/data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../components/Error/ErrorMsg";
import { couponsSchema } from "../../helpers/validation";
import { useAddCoupon } from "../../hooks/useCoupons";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
const AddCoupon = ({ isOpen, closeModal, title }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useAddCoupon();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(couponsSchema),
  });

  const renderCatFields = addCouponsFields?.map(
    ({ label, name, type }, idx) => (
      <div key={idx} className="flex gap-2 flex-col">
        <Label htmlFor={label}>{label} : </Label>
        <Input type={type} id={label} {...register(name)} />
        {errors[name] && <Errormsg msg={errors[name]?.message} />}
      </div>
    )
  );

  //================= SUBMIT DATA ========
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Coupon added successfully");
        closeModal();
        reset();
        queryClient.invalidateQueries(["coupons"]);
      },
      onError: () => {
        toast.error("An error occurred, coupon was not added");
      },
    });
  };
  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderCatFields}
          <div className="flex justify-center items-center space-x-3">
            <Button
              loading={isPending}
              style={`mt-4   text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1  py-[6px] flex justify-center items-center  rounded-[8px]`}
            >
              Add
            </Button>
            <Button
              type="button"
              onClick={() => closeModal()}
              style={`border-[#798594] text-[#dbdbebde]  mt-4   border w-48 px-12 border-1  py-[6px] rounded-[8px]`}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCoupon;

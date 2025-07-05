import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import { addCouponsFields } from "../../data/data";
import Errormsg from "../../components/Error/ErrorMsg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { couponsSchema } from "../../helpers/validation";
import { useEditCoupon } from "../../hooks/useCoupons";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useEffect } from "react";
const EditCoupon = ({ isOpenEdit, closeModalEdit, title, editedCoupon }) => {
  const { isPending, mutate } = useEditCoupon();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(couponsSchema),
    defaultValues: {
      name: "",
      expire: "",
      discount: "",
    },
  });

  useEffect(() => {
    reset({
      name: editedCoupon?.name || "",
      expire: editedCoupon.expire?.slice(0, 10) || "",
      discount: editedCoupon?.discount || "",
    });
  }, [editedCoupon, reset]);

  const renderCatFields = addCouponsFields?.map(
    ({ label, name, type }, idx) => (
      <div key={idx} className="flex gap-2 flex-col">
        <Label htmlFor={label}>{label} :</Label>

        {type === "file" ? (
          <Input type="file" id={label} {...register(name)} />
        ) : (
          <Input type={type} id={label} {...register(name)} />
        )}

        {errors[name] && <Errormsg msg={errors[name]?.message} />}
      </div>
    )
  );

  const onSubmit = (data) => {
    const couponId = editedCoupon._id;
    mutate(
      { data, couponId },
      {
        onSuccess: () => {
          toast.success("Coupon edited successfully");
          queryClient.invalidateQueries(["coupons"]);
          closeModalEdit();
        },
        onError: (error) => {
          toast.error("An error occurred, coupon was not added");
          console.log(error.message, "error from edit category");
        },
      }
    );
  };

  return (
    <div>
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderCatFields}
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-3">
              <Button
                loading={isPending}
                style={`mt-4  text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1  py-[6px] flex justify-center items-center rounded-[8px]`}
              >
                Edit
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

export default EditCoupon;

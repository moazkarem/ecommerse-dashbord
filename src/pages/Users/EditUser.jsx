import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import { userEditFields } from "../../data/data";
import Errormsg from "../../components/Error/ErrorMsg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userEditSchema } from "../../helpers/validation";
import { useEditUser } from "../../hooks/useUser";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
const EditUser = ({ isOpenEdit, closeModalEdit, title, editedUser }) => {
  const { isPending, mutate } = useEditUser();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userEditSchema),
  });

  const renderCatFields = userEditFields?.map(({ label, name, type }, idx) => (
    //========= check file type to avoide default value error in file input
    <div key={idx} className="flex gap-2 flex-col">
      <Label htmlFor={label}>{label} : </Label>

      <Input
        type={type}
        id={label}
        defaultValue={editedUser && editedUser[name] }
        {...register(name)}
      />

      {errors[name] && <Errormsg msg={errors[name]?.message} />}
    </div>
  ));
  const onSubmit = (data) => {
    const userId = editedUser._id;
    mutate(
      { data, userId },
      {
        onSuccess: () => {
          toast.success("User edited successfully");
          queryClient.invalidateQueries(["users"]);
          closeModalEdit();
        },
        onError: (error) => {
          toast.error("An error occurred, user was not added");
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
                style={`mt-4   text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1  py-[6px] flex justify-center items-center rounded-[8px]`}
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

export default EditUser;

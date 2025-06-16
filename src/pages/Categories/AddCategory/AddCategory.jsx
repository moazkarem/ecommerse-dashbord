import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import Button from "../../../Ui/Button";
import { addCategoriesFields } from "../../../data/data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "./../../../components/Error/ErrorMsg";
import { categorySchema } from "../../../helpers/validation";
import { useAddCategory } from "../../../hooks/useCategories";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useQueryClient } from "@tanstack/react-query";
const AddDoctor = ({ isOpen, closeModal, title }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { mutate, isPending } = useAddCategory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm({
    resolver: yupResolver(categorySchema),
  });

  const user_render = addCategoriesFields?.map(({ label, name, type }, idx) => (
    <div key={idx} className="flex gap-2 flex-col">
      <Label htmlFor={label}>{label} : </Label>
      <Input type={type} id={label} {...register(name)} />
      {errors[name] && <Errormsg msg={errors[name]?.message} />}
    </div>
  ));

  //================= SUBMIT DATA ========
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    // formData.append("image", data.image[0]);
    mutate(formData, {
      onSuccess: () => {
        toast.success("Category added successfully");
        closeModal();
        queryClient.invalidateQueries(["categories"]);

        // setTimeout(() => {
        //   navigate("/categories");
        // }, 1200);
      },
      onError: () => {
        toast.error("An error occurred, category was not added");
      },
    });
  };
  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {user_render}
          <div className="flex justify-center items-center space-x-3">
            <Button
              style={`mt-4  text-[#696cff] border w-48 px-12 border-1 border-[#5265FF] py-[6px] rounded-[8px]`}
            >
              Add
            </Button>
            <Button
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

export default AddDoctor;

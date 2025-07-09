import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import { subCategoriesFields } from "../../data/data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../components/Error/ErrorMsg";
import { subCategorySchema } from "../../helpers/validation";
import { useGetCategories } from "../../hooks/useCategories";
import { useAddSubCategory } from "../../hooks/useSubCategories";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
const AddSubCategory = ({ isOpen, closeModal, title }) => {
  const { data: categories } = useGetCategories();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useAddSubCategory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subCategorySchema),
  });

  //=================== FIELDS RENDERING

  const renderSubCatFields = subCategoriesFields?.map(
    ({ label, name, type, isSelect }, idx) =>
      isSelect ? (
        <div key={idx} className="flex gap-2 flex-col">
          <Label htmlFor={label}>{label} : </Label>
          <select
            className="appearance-none w-full border-2 border-[#dbdbebde] bg-[#1E2021] text-white
                rounded-md px-3 py-3 pr-10 text-md shadow-md"
            {...register("category")}
          >
            <option value={"test"}>Select Category</option>
            {categories?.data?.data?.map(({ _id }) => (
              <option key={_id} value={_id}>
                {_id}
              </option>
            ))}
          </select>
          {errors[name] && <Errormsg msg={errors[name]?.message} />}
        </div>
      ) : (
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
        toast.success("sub Category added successfully");
        closeModal();
        reset();
        queryClient.invalidateQueries(["subcategories"]);
      },
      onError: () => {
        toast.error("An error occurred,sub category was not added");
      },
    });
  };
  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderSubCatFields}
          <div className="flex justify-center items-center space-x-3">
            <Button
              loading={isPending}
              style={`mt-4  text-[#fff] border-[#ff0000cc] border w-48 px-12 border-1  py-[6px] flex justify-center items-center  rounded-[8px]`}
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

export default AddSubCategory;

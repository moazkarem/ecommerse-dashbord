import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import { subCategoriesFields } from "../../data/data";
import Errormsg from "../../components/Error/ErrorMsg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subCategorySchema } from "../../helpers/validation";
import { useEditCategory } from "../../hooks/useSubCategories";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import { useGetCategories } from "../../hooks/useCategories";
const EditSubCategory = ({
  isOpenEdit,
  closeModalEdit,
  title,
  editedSubCat,
}) => {
  const { isPending, mutate } = useEditCategory();
  const queryClient = useQueryClient();
  const { data: categories } = useGetCategories();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subCategorySchema),
    defaultValues: {
      name: "",
      category: "",
    },
  });

  useEffect(() => {
    reset({
      name: editedSubCat?.name || "",
      category: editedSubCat?.category || "",
    });
  }, [editedSubCat, reset]);

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

  const onSubmit = (data) => {
    const subcatId = editedSubCat._id;
    console.log(typeof(data?.name) , 'my data form')
    mutate(
      { data, subcatId },
      {
        onSuccess: () => {
          toast.success("Sub Category edited successfully");
          queryClient.invalidateQueries(["categories"]);
          closeModalEdit();
        },
        onError: (error) => {
          toast.error("An error occurred, sub category was not added");
          console.log(error.message, "error from edit sub  category");
        },
      }
    );
  };

  return (
    <div>
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderSubCatFields}
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

export default EditSubCategory;

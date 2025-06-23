import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import { addCategoriesFields } from "../../data/data";
import Errormsg from "../../components/Error/ErrorMsg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../../helpers/validation";
import { useEditCategory } from "../../hooks/useCategories";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
const EditCategory = ({ isOpenEdit, closeModalEdit, title, editedCat }) => {
  const { isPending, mutate } = useEditCategory();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categorySchema),
  });

  const renderCatFields = addCategoriesFields?.map(
    ({ label, name, type }, idx) => (
      <div key={idx} className="flex gap-2 flex-col mb-3">
        <Label htmlFor={label}>{label} :</Label>

        {/* File input */}
        {type === "file" ? (
          <>
            {editedCat?.[name] && (
              <img
                src={editedCat[name]}
                alt={`preview-${label}`}
                className="w-20 h-20 object-cover rounded mb-2"
              />
            )}

            <Input type="file" id={label} {...register(name)} />
          </>
        ) : (
          <Input
            type={type}
            id={label}
            defaultValue={editedCat?.[name] || ""}
            {...register(name)}
          />
        )}

        {errors[name] && <Errormsg msg={errors[name]?.message} />}
      </div>
    )
  );

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]);
    const catId = editedCat._id;
    mutate(
      { formData, catId },
      {
        onSuccess: () => {
          toast.success("Category edited successfully");
          queryClient.invalidateQueries(["categories"]);
          closeModalEdit();
        },
        onError: (error) => {
          toast.error("An error occurred, category was not added");
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

export default EditCategory;

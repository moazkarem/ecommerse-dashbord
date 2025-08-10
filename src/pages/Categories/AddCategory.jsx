import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import imgplaceholder from "../../../public/images/placeholder.jpeg";
import { addCategoriesFields } from "../../data/data";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../components/Error/ErrorMsg";
import { categorySchema } from "../../helpers/validation";
import { useAddCategory } from "../../hooks/useCategories";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
const AddCategory = ({ isOpen, closeModal, title }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useAddCategory();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categorySchema),
  });
  const [imagePreview, setImagePreview] = useState("");
  const [fileImage, setFileImage] = useState("");
  const changeHandeler = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("files", file);
      formData.append(
        "fileInfo",
        JSON.stringify({
          name: file?.name,
        })
      );
      const res = await axios.post(
        "https://better-light-c4601bbd8f.strapiapp.com/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form*data",
          },
        }
      );
      setImagePreview(URL.createObjectURL(file));
      setFileImage(res?.data[0]?.url);
    }
  };

  const renderCatFields = addCategoriesFields?.map(
    ({ label, name, type }, idx) => {
      const inputId = `${name}-input`;
      if (type === "file") {
        return (
          <div key={idx} className="mt-4 relative">
            <Label htmlFor={inputId}>{label} : </Label>
            <div className="relative w-full">
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      id={inputId}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        changeHandeler(e);
                        field.onChange(e.target.files[0]);
                      }}
                    />
                    <img
                      className="w-1/2 p-3 h-[150px] object-contain rounded-md"
                      src={imagePreview || imgplaceholder}
                      alt="Preview"
                    />
                  </>
                )}
              />
            </div>
            <Errormsg msg={errors[name]?.message} />
          </div>
        );
      } else {
        return (
          <div key={idx} className="flex gap-2 flex-col">
            <Label htmlFor={inputId}>{label} : </Label>
            <Input type={type} id={inputId} {...register(name)} />
            {errors[name] && <Errormsg msg={errors[name]?.message} />}
          </div>
        );
      }
    }
  );

  //================= SUBMIT DATA ========
  const onSubmit = (data) => {
    const formData = { ...data, image: fileImage };
    mutate(formData, {
      onSuccess: () => {
        toast.success("Category added successfully");
        closeModal();
        reset();
        queryClient.invalidateQueries(["categories"]);
      },
      onError: () => {
        toast.error("An error occurred, category was not added");
      },
    });
    reset();
  };
  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderCatFields}
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

export default AddCategory;

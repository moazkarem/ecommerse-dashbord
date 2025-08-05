import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import imgplaceholder from "../../../public/images/placeholder.jpeg";
import { addBrandsFields } from "../../data/data";
import Errormsg from "./../../components/Error/ErrorMsg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../../helpers/validation";
import { useEditBrand } from "../../hooks/useBrands";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { imageClean } from "../../helpers/imageClean";
import axios from "axios";
const EditBrand = ({ isOpenEdit, closeModalEdit, title, editedBrand }) => {
  const { isPending, mutate } = useEditBrand();
  const queryClient = useQueryClient();
  const [imgPreview, setImgPreview] = useState("");
  const [fileImg, setFileImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(categorySchema),
  });
  useEffect(() => {
    reset({
      name: editedBrand?.name || "",
      image: null,
    });
    if (editedBrand?.image) {
      setImgPreview(imageClean(editedBrand?.image, "categories"));
    }
  }, [editedBrand, reset]);

  const changeHandeler = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImgPreview(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append("files", file);
      formData.append(
        "fileInfo",
        JSON.stringify({
          name: file.name,
        })
      );
      try {
        const res = await axios.post(
          "http://localhost:1337/api/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form*data",
            },
          }
        );
        setFileImage(res?.data[0]?.url);
        toast.success("Success Image Upload");
      } catch (err) {
        toast.error("Erro In  Image Upload");

        console.log(err?.message);
      }
    }
  };

  const renderCatFields = addBrandsFields?.map(({ label, name, type }, idx) => (
    <div key={idx} className="flex gap-2 flex-col mb-3">
      <Label htmlFor={label}>{label} :</Label>

      {type === "file" ? (
        <>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <div className="relative">
                <Input
                  type="file"
                  id={label}
                  classname="inset-0 opacity-0 cursor-pointer absolute"
                  onChange={(e) => {
                    changeHandeler(e);
                    field.onChange(e.target.files[0]);
                  }}
                />
                <img
                  src={imgPreview ? imgPreview : imgplaceholder}
                  alt={`preview-${label}`}
                  className="w-1/2 p-3 h-[150px] object-contain rounded-md"
                />
              </div>
            )}
          />
        </>
      ) : (
        <Input type={type} id={label} {...register(name)} />
      )}

      {errors[name] && <Errormsg msg={errors[name]?.message} />}
    </div>
  ));

  const onSubmit = (data) => {
    const formData = { ...data, image: fileImg };

    const catId = editedBrand._id;
    mutate(
      { formData, catId },
      {
        onSuccess: () => {
          toast.success("Brand edited successfully");
          queryClient.invalidateQueries(["brands"]);
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

export default EditBrand;

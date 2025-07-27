import { Fragment, useState } from "react";
import Button from "../../../../Ui/Button.jsx";
import Input from "../../../../Ui/Input.jsx";
import Label from "../../../../Ui/Label.jsx";
import Editor from "../../../../Ui/Editor.jsx";
import imgplaceholder from "../../../../../public/images/placeholder.jpeg";
import { HeroData } from "../data.jsx";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../../../Components/Error/Errormsg.jsx";
import { herosectionSchema } from "../../../../helpers/validation.js";
import { useAddHero } from "../../../../hooks/useHomePage.js";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddHero = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(herosectionSchema),
  });

  const queryClient = useQueryClient();
  const [preview, setPreview] = useState("");
  const [fileImage, setFileImage] = useState("");
  const { mutate, isPending } = useAddHero();

  // Handle image selection and preview
  const handleChangeImage = async (e) => {
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
        `http://localhost:1337/api/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res, "changee");

      setPreview(URL.createObjectURL(file));
      setFileImage(res?.data[0]?.id);
    }
  };
  const onSubmit = async (data) => {
    const finalData = {
      title: data?.title,
      description: data?.description,
      oldPrice: data?.oldPrice,
      newPrice: data?.newPrice,
      category: data?.category,
      image: fileImage,
    };
    console.log(typeof fileImage, "fiii");
    mutate(finalData, {
      onSuccess: () => {
        queryClient.invalidateQueries("herosection");
        toast.success("Hero Data Added Successfully");
        navigate("/pages/homepage/hero");
      },
      onError: (error) => {
        console.error("Update error:", error.response?.data || error.message);
        toast.error("Error In Add Hero Data");
      },
    });
  };

  const renderFields = HeroData?.map(
    ({ type, name, label, isEditor, col }, idx) => (
      <Fragment key={idx}>
        {type === "file" ? (
          <div className={`flex gap-4 flex-col col-span-${col}`}>
            <Label htmlFor={label}>{label} : </Label>
            <div className="w-80 h-36 rounded-[10px] overflow-hidden bg-[#1E2021] cursor-pointer relative mb-5">
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      id={label}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleChangeImage(e);
                        field.onChange(e.target.files[0]); // Update form state
                      }}
                    />
                    <img
                      className="w-full p-3 h-full object-contain"
                      src={preview || imgplaceholder}
                      alt="Preview"
                    />
                    <Errormsg msg={errors[name]?.message} />
                  </>
                )}
              />
            </div>
          </div>
        ) : isEditor ? (
          <div className={`flex gap-4 flex-col col-span-${col}`}>
            <Label htmlFor={label}>{label} : </Label>
            <Controller
              control={control}
              name={name}
              render={({ field }) => <Editor {...field} />}
            />
            <Errormsg msg={errors[name]?.message} />
          </div>
        ) : (
          <div className={`flex gap-4 flex-col col-span-${col || 6}`}>
            <Label htmlFor={label}>{label} : </Label>
            <Input type={type} id={label} name={name} {...register(name)} />
            <Errormsg msg={errors[name]?.message} />
          </div>
        )}
      </Fragment>
    )
  );

  return (
    <div className="mt-6 px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-5 py-24"
      >
        {renderFields}
        <div className="col-span-12">
          <Button
            type="submit"
            loading={isPending}
            style={`mt-4 text-[#fff] border-[#ff0000cc] border w-48 px-12 border-1 py-[6px] flex justify-center items-center rounded-[8px]`}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddHero;

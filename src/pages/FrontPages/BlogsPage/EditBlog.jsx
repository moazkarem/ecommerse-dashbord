import { Fragment, useEffect, useState } from "react";
import Button from "../../../Ui/Button.jsx";
import Input from "../../../Ui/Input.jsx";
import Label from "../../../Ui/Label.jsx";
import Editor from "../../../Ui/Editor.jsx";
import imgplaceholder from "../../../../public/images/placeholder.jpeg";
import { blogsData } from "./data.jsx";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../../components/Error/ErrorMsg.jsx";
import { blogsSchema } from "../../../helpers/validation.js";
import { useUpdateBlog, useGetSingleBlog } from "../../../hooks/useBlogs.js";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: singleBlog } = useGetSingleBlog(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(blogsSchema),
  }); 
  useEffect(() => {
    reset({
      title: singleBlog?.title,
      description: singleBlog?.description,
      image: null,
    });

    if (singleBlog?.image?.url) {
      setPreview(`${singleBlog.image.url}`);
    }
  }, [singleBlog, reset]);

  const queryClient = useQueryClient();
  const [preview, setPreview] = useState("");
  const [fileImage, setFileImage] = useState("");
  const { mutate, isPending } = useUpdateBlog();

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
      try {
        const res = await axios.post(
          `https://better-light-c4601bbd8f.strapiapp.com/api/upload?id=${singleBlog?.image?.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Image Uploaded Successfully ");
        setPreview(URL.createObjectURL(file));
        setFileImage(res?.data?.id);
      } catch (err) {
        toast.error("Error In Upload Image ");
      }

      // console.log(res, "changee");
    }
  };
  const onSubmit = async (data) => {
    console.log(fileImage , 'filll')
    const finalData = {
      title: data?.title,
      description: data?.description,
      image: fileImage,
    };
    mutate({finalData , id}, {
      onSuccess: () => {
        queryClient.invalidateQueries("blogs");
        toast.success("Blog Updated Successfully");
        navigate("/pages/blogs");
      },
      onError: (error) => {
        console.error("Update error:", error.response?.data || error.message);
        toast.error("Error In Update Blog");
      },
    });
  };

  const renderFields = blogsData?.map(
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

export default EditBlog;

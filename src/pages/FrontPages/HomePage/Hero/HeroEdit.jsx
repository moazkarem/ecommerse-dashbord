import { Fragment, useState } from "react";
import Button from "../../../../Ui/Button.jsx";
import Input from "../../../../Ui/Input.jsx";
import Label from "../../../../Ui/Label.jsx";
import Editor from "../../../../Ui/Editor.jsx";
// import { useGetHero } from "../../../../hooks/useHomePage.js";
import imgplaceholder from "../../../../../public/images/placeholder.jpeg";
import { HeroData } from "../data.jsx";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../../../Components/Error/Errormsg.jsx";
import { herosectionSchema } from "../../../../helpers/validation.js";
import { useUpdateHero } from "../../../../hooks/useHomePage.js";
import toast from "react-hot-toast";
import {  useQueryClient } from "@tanstack/react-query";
const HeroForm = ({ slider }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(herosectionSchema),
    defaultValues: slider,
  });
  const queryClient = useQueryClient();
  const [preview, setPreview] = useState("");
  const { mutate } = useUpdateHero();
  // const handelChange = (e, name) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setPreview(imageUrl);
  //     setValue(name, file, { shouldValidate: true }); // مهم
  //   }
  // };
  const onSubmit = (data) => {
    console.log(typeof data.image, "formmm");
    const id = slider?.documentId;
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("oldPrice", data.oldPrice);
    formData.append("newPrice", data.newPrice);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key} :`, value);
    // }

    mutate(
      { formData, id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("herosection");
          toast.success("Hero Data Updated Successfully");
        },
        onError: () => {
          toast.error("Error In Update Hero Data ");
        },
      }
    );
  };

  const renderFields = HeroData?.map(
    ({ type, name, label, isEditor, col }, idx) => (
      <Fragment key={idx}>
        {type === "file" ? (
          <div className={`flex gap-4 flex-col col-span-${col}`}>
            <Label htmlFor={label}>{label} : </Label>
            <div className="w-80   h-36 rounded-[10px] overflow-hidden bg-[#1E2021] cursor-pointer relative mb-5">
              <Controller
                name={name}
                control={control}
                // {...register(name)}
                render={({ field }) => (
                  <>
                    <Input
                      id={label}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setPreview(URL.createObjectURL(file));
                          field.onChange(file); // دا المهم
                          setValue(name, file); // برضو مفيد لو بتستخدمه فى الفورم بشكل عام
                        }
                      }}
                    />
                    <img
                      className="w-full p-3 h-full object-contain"
                      src={
                        preview ||
                        `http://localhost:1337${slider?.image?.url} ` ||
                        imgplaceholder
                      }
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
              {...register(name)}
              render={({ field }) => <Editor {...field} />}
              defaultValue={slider?.[name] || ""}
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
        // key={idx}
        className="grid grid-cols-12 gap-5  border-b border-[#ff0000] py-24 "
      >
        {renderFields}
        <div className="col-span-12">
          <Button
            type="submit"
            // loading={isPending}
            style={`mt-4   text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1  py-[6px] flex justify-center items-center  rounded-[8px]`}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;

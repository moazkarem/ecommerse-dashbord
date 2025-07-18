import { Fragment, useState } from "react";
import Button from "../../../../Ui/Button.jsx";
import Input from "../../../../Ui/Input.jsx";
import Label from "../../../../Ui/Label.jsx";
import Editor from "../../../../Ui/Editor.jsx";
import { useGetHero } from "../../../../hooks/useHomePage.js";
import imgplaceholder from "../../../../../public/images/placeholder.jpeg";
import { HeroData } from "../data.jsx";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../../../Components/Error/Errormsg.jsx";
import { herosectionSchema } from "../../../../helpers/validation.js";
const HeroForm = ({ slider }) => {
  console.log(`http://localhost:1337/${slider?.image?.url}` , 'sliddddd');
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

  const [preview, setPreview] = useState("");

  const handelChange = (e, name) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setValue(name, file); // ← دي مهمة لو عايز ترسل الملف
    }
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  const renderFields = HeroData?.map(
    ({ type, name, label, isEditor, col }, idx) => (
      <Fragment key={idx}>
        {type === "file" ? (
          <div className={`flex gap-4 flex-col col-span-${col}`}>
            <Label htmlFor={label}>{label} : </Label>
            <div className="w-80   h-36 rounded-[10px] overflow-hidden bg-[#1E2021] cursor-pointer relative mb-5">
              <input
                id={label}
                className="absolute inset-0 opacity-0 cursor-pointer"
                type="file"
                accept="image/*"
                onChange={(e) => handelChange(e, name)}
                name={name}
                {...register(name)}
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
            <Input type={"text"} id={label} name={name} {...register(name)} />
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

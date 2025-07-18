import { useState } from "react";
import Button from "../../../Ui/Button";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import Editor from "../../../Ui/Editor";

const HeroSection = () => {
  const [preview, setPreview] = useState("");

  const handelChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="mt-6 px-10">
      <div className="grid">
        <div className="flex gap-4 flex-col col-span-6">
          <Label htmlFor={"title"}>Hero Image : </Label>
          <div className="w-80   h-36 rounded-[10px] overflow-hidden bg-[#1E2021] cursor-pointer relative mb-5">
            <input
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
              accept="image/*"
              onChange={handelChange}
            />
            <img
              className="w-full h-full object-cover"
              src={
                preview ||
                "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              }
            />
          </div>
        </div>

        <div className="flex gap-4 flex-col col-span-6">
          <Label htmlFor={"title"}>Title : </Label>
          <Editor value="description"/>
        </div>

        <div className="flex gap-4 flex-col col-span-6">
          <Label htmlFor={"title"}>Title : </Label>
          <Input type={"text"} id={"title"} />
        </div>

        <Button
          // loading={isPending}
          style={`mt-4   text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1  py-[6px] flex justify-center items-center  rounded-[8px]`}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

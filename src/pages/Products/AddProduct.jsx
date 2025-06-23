import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
import { productsFields } from "../../data/data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormsg from "../../components/Error/ErrorMsg";
import { productSchema } from "../../helpers/validation";
import { useAddProduct } from "../../hooks/useProducts";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState } from "react";
import { useGetBrands } from './../../hooks/useBrands';
import { useGetCategories } from './../../hooks/useCategories';
const AddProduct = ({ isOpen, closeModal, title }) => {
  const { data: categories} = useGetCategories();
  const { data: brands } = useGetBrands();

  const [previews, setPreviews] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const fileInputRef = useRef({});
  const queryClient = useQueryClient();
  const { mutate, isPending } = useAddProduct();
  const {
    register,
    handleSubmit,
    reset,
    setValue ,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  const renderCatFields = productsFields?.map(
    ({ label, name, type, isSelect, isImages }, idx) => (
      <div key={idx} className="flex gap-4 flex-col">
        <Label htmlFor={label}>{label} : </Label>

        {isSelect ? (
          <div className="relative w-full">
            <select
              className="appearance-none w-full border-2 border-[#dbdbebde] bg-[#1E2021] text-white
                 rounded-md px-3 py-3 pr-10 text-md shadow-md"
              {...register(name)}
            >
              <option value={"test"}>test</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <IoIosArrowDown color="#dbdbebde" />
            </div>
          </div>
        ) : type === "file" && (isImages || name === "imageCover") ? (
          <>
            <div
              onClick={() => fileInputRef.current[name]?.click()}
              className="w-32 h-32 bg-[#0E1011] text-white flex items-center justify-center rounded-lg cursor-pointer border border-dashed border-[#ed1d24] hover:shadow-md"
            >
              <span className="text-sm text-center">Click to upload</span>
            </div>

            <input
              type="file"
              multiple={isImages}
              accept="image/*"
              {...register(name)}
              ref={(el) => (fileInputRef.current[name] = el)}
              onChange={(e) => {
                const files = Array.from(e.target.files);
                const previewsArr = files.map((file) =>
                  URL.createObjectURL(file)
                );
                setPreviews((prev) => ({
                  ...prev,
                  [name]: isImages ? previewsArr : [previewsArr[0]],
                }));
                setValue(name, e.target.files, { shouldValidate: true });
              }}
              className="hidden"
            />

            <div className="flex gap-2 mt-2 flex-wrap">
              {previews[name]?.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`preview-${i}`}
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
          </>
        ) : type === "color" ? (
          <>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-10 h-10 p-0 border-none bg-transparent cursor-pointer"
              />
              <button
                type="button"
                onClick={() => {
                  if (!colorsList.includes(selectedColor)) {
                    const newColors = [...colorsList, selectedColor];
                    setColorsList(newColors);
                    setValue(name, newColors); 
                  }
                }}
                className="bg-[#ed1d24] text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Add
              </button>
            </div>

            <input type="hidden" {...register(name)} />

            <div className="flex gap-2 mt-2 flex-wrap mb-3">
              {colorsList.map((color, i) => (
                <div key={i} className="relative">
                  <div
                    className="rounded"
                    style={{
                      backgroundColor: color,
                      width: "20px",
                      height: "20px",
                      border: "1px solid #fff",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = colorsList.filter((c) => c !== color);
                      setColorsList(updated);
                      setValue(name, updated);
                    }}
                    className="absolute -top-2 -right-2 text-white text-xs bg-red-600 rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <Input type={type} id={label} {...register(name)} />
        )}

        {errors[name] && <Errormsg msg={errors[name]?.message} />}
      </div>
    )
  );

  //================= SUBMIT DATA ========
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.title);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);
  
    // send colors array
    formData.append("availableColors", JSON.stringify(data.availableColors));
  
    // cover image
    formData.append("imageCover", data.imageCover[0]);
  
    // multiple images
    if (data.images && data.images.length > 0) {
      Array.from(data.images).forEach((img) => {
        formData.append("images", img);
      });
    }
  
    formData.append("category", data.category);
    formData.append("brand", data.brand);
  
    mutate(formData, {
      onSuccess: () => {
        toast.success("Product added successfully");
        closeModal();
        reset();
        queryClient.invalidateQueries(["products"]);
      },
      onError: () => {
        toast.error("An error occurred, product was not added");
      },
    });
  };
  
  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderCatFields}
          <div className="flex justify-center items-center space-x-3">
            <Button
              loading={isPending}
              style={`mt-4   text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1  py-[6px] flex justify-center items-center  rounded-[8px]`}
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

export default AddProduct;

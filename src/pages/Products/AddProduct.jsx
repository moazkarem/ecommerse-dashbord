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
import { useGetBrands } from "./../../hooks/useBrands";
import { useGetCategories } from "./../../hooks/useCategories";
const AddProduct = ({ isOpen, closeModal, title }) => {
  const { data: categories } = useGetCategories();
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
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  //================= SUBMIT DATA ========
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);
    formData.append("ratingsQuantity", data.ratingsQuantity);
    formData.append("ratingsAverage", data.ratingsAverage);

    // send colors array
    formData.append("availableColors", JSON.stringify(data.availableColors));

    // cover image
    formData.append(
      "imageCover",
      "https://m.media-amazon.com/images/I/512WDTbwHwL._AC_SX569_.jpg"
    );

    // multiple images
    if (data.images && data.images.length > 0) {
      Array.from(data.images).forEach((img) => {
        formData.append(
          "images",
          "https://m.media-amazon.com/images/I/512WDTbwHwL._AC_SX569_.jpg"
        );
      });
    }

    formData.append("category", data.category);
    formData.append("brand", data.brand);

    // console.log("form data");
    // for(let [key , value] of formData.entries()){
    //   console.log(`${key} is : ${value}`);
    // }

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
          {/* Product Title */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Product Title :</Label>
            <Input type="text" id="title" {...register("title")} />
            {errors.title && <Errormsg msg={errors.title.message} />}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description :</Label>
            <Input type="text" id="description" {...register("description")} />
            {errors.description && (
              <Errormsg msg={errors.description.message} />
            )}
          </div>

          {/* Quantity */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity :</Label>
            <Input type="number" id="quantity" {...register("quantity")} />
            {errors.quantity && <Errormsg msg={errors.quantity.message} />}
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Price :</Label>
            <Input type="number" id="price" {...register("price")} />
            {errors.price && <Errormsg msg={errors.price.message} />}
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="ratingsQuantity">Rating :</Label>
            <Input
              type="number"
              id="ratingsQuantity"
              {...register("ratingsQuantity")}
            />
            {errors.ratingsQuantity && (
              <Errormsg msg={errors.ratingsQuantity.message} />
            )}
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="ratingsAverage">  Rating Average :</Label>
            <Input
              type="number"
              id="ratingsAverage"
              {...register("ratingsAverage")}
            />
            {errors.ratingsAverage && (
              <Errormsg msg={errors.ratingsAverage.message} />
            )}
          </div>

          {/* Available Colors */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="availableColors">Available Colors :</Label>
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
                    setValue("availableColors", newColors);
                  }
                }}
                className="bg-[#ed1d24] text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Add
              </button>
            </div>

            <Input type="hidden" {...register("availableColors")} />

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
                      setValue("availableColors", updated);
                    }}
                    className="absolute -top-2 -right-2 text-white text-xs bg-red-600 rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {errors.availableColors && (
              <Errormsg msg={errors.availableColors.message} />
            )}
          </div>

          {/* Image Cover */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="imageCover">Image Cover :</Label>

            <Input type="file" {...register("imageCover")} />

            {errors.imageCover && <Errormsg msg={errors.imageCover.message} />}
          </div>

          {/* Images */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="images">Images :</Label>

            <Input
              type="file"
              accept="image/*"
              multiple
              {...register("images")}
            />
            <div className="flex gap-2 mt-2 flex-wrap">
              {previews.images?.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`preview-${i}`}
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
            {errors.images && <Errormsg msg={errors.images.message} />}
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="category">Category :</Label>
            <div className="relative w-full">
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
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <IoIosArrowDown color="#dbdbebde" />
              </div>
            </div>
            {errors.category && <Errormsg msg={errors.category.message} />}
          </div>

          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="brand">Brand :</Label>
            <div className="relative w-full">
              <select
                className="appearance-none w-full border-2 border-[#dbdbebde] bg-[#1E2021] text-white
          rounded-md px-3 py-3 pr-10 text-md shadow-md"
                {...register("brand")}
              >
                <option value={"test"}>Select Brand</option>
                {brands?.data?.data?.map(({ _id }) => (
                  <option key={_id} value={_id}>
                    {_id}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <IoIosArrowDown color="#dbdbebde" />
              </div>
            </div>
            {errors.brand && <Errormsg msg={errors.brand.message} />}
          </div>

          {/* Submit button */}
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-3">
              <Button
                loading={isPending}
                style={`mt-4   text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1  py-[6px] flex justify-center items-center rounded-[8px]`}
              >
                Add
              </Button>
              <Button
                onClick={() => closeModal()}
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

export default AddProduct;

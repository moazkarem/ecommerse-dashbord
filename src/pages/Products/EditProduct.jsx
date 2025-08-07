import Modal from "../../Ui/Modal";
import Input from "../../Ui/Input";
import Label from "../../Ui/Label";
import Button from "../../Ui/Button";
// import { addBrandsFields } from "../../data/data";
import Errormsg from "./../../components/Error/ErrorMsg";
import { useForm } from "react-hook-form";
import { useEditProduct } from "../../hooks/useProducts";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";
import { useGetBrands } from "./../../hooks/useBrands";
import { useGetCategories } from "./../../hooks/useCategories";
import { useEffect, useState } from "react";
import axios from "axios";
import imgplaceholder from "../../../public/images/placeholder.jpeg";
import { Controller } from "react-hook-form";
import { imageClean } from "../../helpers/imageClean";
const EditProduct = ({ isOpenEdit, closeModalEdit, title, editedProduct }) => {
  const [imageCoverPreview, setImageCoverPreview] = useState("");
  const [imgCoverFile, setImgCoverFile] = useState("");
  const [multiImages, setMultiImages] = useState([]);
  // const [multiImageFiles, setMultiImageFiles] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    control,

    formState: { errors },
  } = useForm({});
  const [colorsList, setColorsList] = useState(
    editedProduct?.availableColors || []
  );

  useEffect(() => {
    if (editedProduct?.availableColors?.[0]) {
      try {
        // Parse the string inside the array
        const parsedColors = JSON.parse(editedProduct.availableColors[0]);

        setColorsList(parsedColors);
        setValue("availableColors", parsedColors);
      } catch (err) {
        console.error("Failed to parse colors", err);
        setColorsList([]); // fallback
        setValue("availableColors", []);
      }
    }

    if (editedProduct?.imageCover) {
      setImageCoverPreview(imageClean(editedProduct?.imageCover));
    }
    if (editedProduct?.images) {
      const cleanedImages = imageClean(editedProduct.images);
      const formatted = cleanedImages.map((img) => ({
        preview: img,
        url: img,
        file: null,
      }));
      setMultiImages(formatted);
    }
  }, [editedProduct, setValue]);

  const [selectedColor, setSelectedColor] = useState("#000000");

  const { data: categories } = useGetCategories();
  const { data: brands } = useGetBrands();
  const { isPending, mutate } = useEditProduct();
  const queryClient = useQueryClient();

  const changeHandeler = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

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
        setImageCoverPreview(URL.createObjectURL(file));
        setImgCoverFile(res?.data[0]?.url);
        toast.success("Success Image Upload");
      } catch (err) {
        toast.error("Erro In  Image Upload");

        console.log(err?.message);
      }
    }
  };

  const handleSingleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("files", file);
    formData.append("fileInfo", JSON.stringify({ name: file.name }));

    try {
      const res = await axios.post(
        "http://localhost:1337/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedImages = [...multiImages];
      updatedImages[index] = {
        preview: URL.createObjectURL(file),
        url: res?.data[0]?.url,
        file,
      };
      setMultiImages(updatedImages);

      toast.success("Image updated");
    } catch (err) {
      toast.error("Error updating image");
      console.error(err);
    }
  };

  // const changeMultiHandeler = async (e) => {
  //   // Array.from({length:10})
  //   const files = Array.from(e.target.files);

  //   const previews = [];
  //   const urls = [];

  //   try {
  //     for (const file of files) {
  //       const formData = new FormData();
  //       formData.append("files", file);
  //       formData.append("fileInfo", JSON.stringify({ name: file.name }));

  //       const res = await axios.post(
  //         "http://localhost:1337/api/upload",
  //         formData,
  //         {
  //           headers: { "Content-Type": "multipart/form-data" },
  //         }
  //       );

  //       previews.push(URL.createObjectURL(file));
  //       urls.push(res?.data[0]?.url);
  //     }

  //     setMultiImagePreviews(previews);
  //     setMultiImageFiles(urls);

  //     toast.success("Uploaded multiple images successfully");
  //   } catch (err) {
  //     toast.error("Error in uploading multiple images");
  //     console.error(err);
  //   }
  // };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      imageCover: imgCoverFile,
      images: multiImages.map((img) => img.url),
      //  imageCover: '/upload test',
      // images: ['teset' , 'test2' , 'test3'],
    };
    const productId = editedProduct._id;
    mutate(
      { formData, productId },
      {
        onSuccess: () => {
          toast.success("Product edited successfully");
          queryClient.invalidateQueries(["categories"]);
          closeModalEdit();
        },
        onError: (error) => {
          toast.error("An error occurred, product was not added");
          console.log(error.message, "error from edit product");
        },
      }
    );
  };

  return (
    <div>
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Product Title */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Product Title :</Label>
            <Input
              type="text"
              id="title"
              {...register("title")}
              defaultValue={editedProduct ? editedProduct["title"] : ""}
            />
            {errors.title && <Errormsg msg={errors.title.message} />}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description :</Label>
            <Input
              type="text"
              id="description"
              {...register("description")}
              defaultValue={editedProduct ? editedProduct["description"] : ""}
            />
            {errors.description && (
              <Errormsg msg={errors.description.message} />
            )}
          </div>

          {/* Quantity */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity :</Label>
            <Input
              type="number"
              id="quantity"
              {...register("quantity")}
              defaultValue={editedProduct ? editedProduct["quantity"] : ""}
            />
            {errors.quantity && <Errormsg msg={errors.quantity.message} />}
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Price :</Label>
            <Input
              type="number"
              id="price"
              {...register("price")}
              defaultValue={editedProduct ? editedProduct["price"] : ""}
            />
            {errors.price && <Errormsg msg={errors.price.message} />}
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="ratingsQuantity">Rating :</Label>
            <Input
              type="number"
              id="ratingsQuantity"
              {...register("ratingsQuantity")}
              defaultValue={
                editedProduct ? editedProduct["ratingsQuantity"] : ""
              }
            />
            {errors.ratingsQuantity && (
              <Errormsg msg={errors.ratingsQuantity.message} />
            )}
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="ratingsAverage"> Rating Average :</Label>
            <Input
              type="number"
              id="ratingsAverage"
              {...register("ratingsAverage")}
              defaultValue={
                editedProduct ? editedProduct["ratingsAverage"] : ""
              }
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
                      setValue("availableColors", updated); // التزامن مع الفورم
                    }}
                    className="absolute -top-2 -right-2 text-white text-xs bg-red-600 rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* رسالة الخطأ */}
            {errors.availableColors && (
              <Errormsg msg={errors.availableColors.message} />
            )}
          </div>

          {/* Image Cover */}
          <div className="flex flex-col gap-2 ">
            <Label htmlFor="imageCover">Image Cover :</Label>
            <Controller
              name="imageCover"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <Input
                    type="file"
                    accept="image/*"
                    className="inset-0 opacity-0 cursor-pointer absolute rounded-[10px]"
                    onChange={(e) => {
                      changeHandeler(e);
                      field.onChange(e.target.files[0]);
                    }}
                  />
                  <img
                    src={imageCoverPreview || imgplaceholder}
                    alt={`preview-cover`}
                    className="w-1/2 p-3 h-[150px] object-contain rounded-[10px]"
                  />
                </div>
              )}
            />

            {errors.imageCover && <Errormsg msg={errors.imageCover.message} />}
          </div>

          {/* Images */}
          <div className="flex flex-wrap gap-4 p-3">
            {multiImages.length > 0 ? (
              multiImages.map((img, i) => (
                <div key={i} className="relative group">
                  <img
                    src={imageClean(img.preview)}
                    alt={`preview-${i}`}
                    className="w-[120px] h-[120px] object-contain rounded-[10px]"
                  />
                  <label className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                    <span className="text-white text-sm">Edit</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleSingleImageChange(e, i)}
                    />
                  </label>
                </div>
              ))
            ) : (
              <img
                src={imgplaceholder}
                alt="placeholder"
                className="w-[120px] h-[120px] object-contain rounded-[10px]"
              />
            )}
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
                <option value={editedProduct?.category}>
                  {editedProduct?.category}
                </option>
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
                <option value={editedProduct?.category}>
                  {editedProduct?.brand}
                </option>
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
                type="submit"
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

export default EditProduct;

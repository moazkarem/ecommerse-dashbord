import * as yup from "yup";
export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .matches(/^.+@.+\..+$/gi, "invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters "),
  })
  .required();

//============== Categories & Brands

export const categorySchema = yup.object({
  name: yup.string().required(" Name Is Required"),
  image: yup
    .mixed()
    .required(" Image Is Required")
    .test("fileExist", "Image is required", (value) => {
      return value && value.length > 0;
    }),
});

//==============Sub Categories & Brands

export const subCategorySchema = yup.object({
  name: yup.string().required(" Name Is Required"),
  category: yup.string().required("Category is required"),
});
//============== Coupons

export const couponsSchema = yup.object({
  name: yup.string().required("Name is required"),

  expire: yup
    .date()
    .typeError("Expire date must be a valid date")
    .required("Expire date is required"),

  discount: yup
    .number()
    .typeError("Discount must be a number")
    .required("Discount is required"),
});

//============== USERS

export const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password")], "Passwords must match"),

  phone: yup.string().required("Phone number is required"),

  role: yup
    .string()
    .oneOf(["admin", "user"], "Role must be either 'admin' or 'user'")
    .required("Role is required"),
});

export const userEditSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  phone: yup.string().required("Phone number is required"),

  role: yup
    .string()
    .oneOf(["admin", "user"], "Role must be either 'admin' or 'user'")
    .required("Role is required"),
});

//============== PRODUCTS

export const productSchema = yup.object().shape({
  title: yup.string().required("Product title is required"),
  description: yup.string().required("Description is required"),
  quantity: yup
    .number()
    .typeError("Quantity must be a number")
    .required("Quantity is required")
    .positive("Quantity must be greater than zero")
    .integer("Quantity must be an integer"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be greater than zero"),
  imageCover: yup.mixed().required("Cover image is required"),

  images: yup.mixed().required("Images are required"),
  category: yup.string().required("Category is required"),
  brand: yup.string().required("Brand is required"),
});

//============== hero section

export const herosectionSchema = yup.object({
  image: yup.mixed().required(" Image Is Required"),
  title: yup.string().required(" Title Is Required"),
  description: yup.string().required(" description Is Required"),
  oldPrice: yup.string().required(" old Price Is Required"),
  newPrice: yup.string().required(" New Price Is Required"),
});

//============== blogs schema

export const blogsSchema = yup.object({
  image: yup.mixed().required(" Image Is Required"),
  title: yup.string().required(" Title Is Required"),
  description: yup.string().required(" description Is Required"),
});

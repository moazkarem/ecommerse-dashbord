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

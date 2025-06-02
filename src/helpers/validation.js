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

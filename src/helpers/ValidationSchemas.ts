import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Confirm Password is Required"),
});

export const addProductSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  img: yup
    .mixed()
    .test("fileType", "Only image/png files are allowed", (value) => {
      if (!value) return true;
      return (value as File).type === "image/png";
    })
    .required("Image is required"),
  price: yup
    .number()
    .typeError("Price must be a valid number")
    .required("Price is required"),
  weight: yup
    .number()
    .typeError("Price must be a valid number")
    .required("Weight is required"),
  ingredients: yup.string().required("Ingredients is required"),
});

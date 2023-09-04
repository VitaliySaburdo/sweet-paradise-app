import * as yup from "yup";
import { useFormik } from 'formik';
import { StyledForm } from "./RegisterForm.styled";


const validationSchema = yup.object({
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

export const RegisterForm = () => {

    const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ name, email, password }, { resetForm }) => {
      console.log({ name, email, password });
       resetForm();
    },
    });
  
  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        
        <label htmlFor="confirm">Confirm</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          value={formik.values.confirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirm && formik.errors.confirm ? (
          <div>{formik.errors.confirm}</div>
        ) : null}
        
        <button type="submit">Register</button>
      </StyledForm>
    </>
  );
};

import * as yup from "yup";
import { Formik, Field, ErrorMessage  } from 'formik';
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

  
  return (
    <>
       <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirm: '',
      }}
      validationSchema={validationSchema}
      onSubmit={({ name, email, password }) => {
        console.log({ name, email, password });
      }}
    >
        <StyledForm>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
          
          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
          
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
          
          <label htmlFor="confirm">Confirm</label>
          <Field type="password" id="confirm" name="confirm" />
          <ErrorMessage name="confirm" component="div" />
          
          <button type="submit">Register</button>
        </StyledForm>
        </Formik>
    </>
  );
};

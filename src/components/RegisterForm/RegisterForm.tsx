import * as yup from "yup";
import { Formik } from "formik";
import { StyledForm, StyledField, StyledLabel, StyledMessage } from "./RegisterForm.styled";
import { Button } from "../Button/Button";
import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/operations";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/store';

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

  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ name, email, password }) => {
          dispatch(register({ name, email, password }));
        }}
      >
        <StyledForm>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledField
            type="text"
            id="name"
            name="name"
            placeholder="Please enter your name"
          />
          <StyledMessage name="name" component="div" />

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledField
            type="text"
            id="email"
            name="email"
            placeholder="Please your email"
          />
          <StyledMessage name="email" component="div" />

          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledField
            type="password"
            id="password"
            name="password"
            placeholder="Please your password"
          />
          <StyledMessage name="password" component="div" />

          <StyledLabel htmlFor="confirm">Confirm</StyledLabel>
          <StyledField
            type="password"
            id="confirm"
            name="confirm"
            placeholder="Please confirm your password"
          />
          <StyledMessage name="confirm" component="div" />

          <Button type="submit">Register</Button>
        </StyledForm>
      </Formik>
    </>
  );
};

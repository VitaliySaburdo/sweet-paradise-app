import * as yup from "yup";
import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../redux/store";
import { Button } from "../Button/Button";
import { register } from "../../redux/auth/operations";
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  Title,
  Text,
  Span,
} from "./LoginForm.styled";

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
});

export const LoginForm = () => {
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ name, email, password }, { resetForm }) => {
          dispatch(register({ name, email, password }));
          resetForm();
        }}
      >
        <StyledForm>
          <Title>Register</Title>
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

          <Button
            margin="20px auto 0 auto"
            height="50px"
            width="100%"
            type="submit"
          >
            Register
          </Button>
          <Text>
            Already have an account
            <Span>
              <button onClick={() => setIsRegisterForm(true)}>Register</button>
            </Span>
          </Text>
        </StyledForm>
      </Formik>
    </>
  );
};

import React, { useState } from "react";
import { Formik } from "formik";
import { useAppDispatch } from "../../hooks/reduxHook";
import { Button } from "../Button/Button";
import { register } from "../../redux/auth/authOperations";
import { registerSchema } from "../../helpers/ValidationSchemas";
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  Title,
  Text,
  Span,
  Btn,
} from "./RegisterForm.styled";
import { LoginForm } from "../LoginForm/LoginForm";
import { Icon } from "../Icon/Icon";

interface RegisterFormProps {
  closeModal: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ closeModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [typePass, setTypePass] = useState("password");
  const [showConfirm, setShowConfirm] = useState(false);
  const [typeConfirm, setTypeConfirm] = useState("password");

  const dispatch = useAppDispatch();

  const handlePassIconClick = () => {
    setShowPass(!showPass);
    if (typePass === "password") {
      setTypePass("text");
    } else {
      setTypePass("password");
    }
  };

  const handleConfirmIconClick = () => {
    setShowConfirm(!showConfirm);
    if (typeConfirm === "password") {
      setTypeConfirm("text");
    } else {
      setTypeConfirm("password");
    }
  };

  return (
    <>
      {isLoginForm ? (
        <LoginForm closeModal={() => setIsLoginForm(false)} />
      ) : (
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirm: "",
          }}
          validationSchema={registerSchema}
          onSubmit={({ name, email, password }, { resetForm }) => {
            dispatch(register({ name, email, password }));
            resetForm();
            closeModal();
          }}
        >
          <StyledForm>
            <Title>Register</Title>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your name"
              />
              <Icon id={"icon-user"} />
            </div>
            <StyledMessage name="name" component="div" />

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type="text"
                id="email"
                name="email"
                placeholder="Please your email"
              />
              <Icon id={"icon-mail"} />
            </div>
            <StyledMessage name="email" component="div" />

            <StyledLabel htmlFor="password">Password</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type={typePass}
                id="password"
                name="password"
                placeholder="Please your password"
              />
              {showPass ? (
                <Icon id="icon-show" onClick={handlePassIconClick} />
              ) : (
                <Icon id="icon-hide" onClick={handlePassIconClick} />
              )}
            </div>
            <StyledMessage name="password" component="div" />

            <StyledLabel htmlFor="confirm">Confirm</StyledLabel>
            <div style={{ position: "relative" }}>
              <StyledField
                type={typeConfirm}
                id="confirm"
                name="confirm"
                placeholder="Please confirm your password"
              />
              {showConfirm ? (
                <Icon id="icon-show" onClick={handleConfirmIconClick} />
              ) : (
                <Icon id="icon-hide" onClick={handleConfirmIconClick} />
              )}
            </div>
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
                <Btn onClick={() => setIsLoginForm(true)}>Login</Btn>
              </Span>
            </Text>
          </StyledForm>
        </Formik>
      )}
    </>
  );
};

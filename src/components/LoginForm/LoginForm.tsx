import { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../redux/store";
import { Button } from "../Button/Button";
import { logIn } from "../../redux/auth/operations";
import {loginSchema} from '../../helpers/ValidationSchemas'
import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  Title,
  Text,
  Span,
  Btn,
} from "./LoginForm.styled";
import { RegisterForm } from "../RegisterForm/RegisterForm";

interface LoginFormProps {
  closeModal: () => void;
}


export const LoginForm: React.FC<LoginFormProps> = ({ closeModal }) => {
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  return (
    <>
      {isRegisterForm ? (
        <RegisterForm closeModal={closeModal } />
      ) : (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
            onSubmit={({ email, password }, { resetForm }) => {
            dispatch(logIn({ values: { email, password } }));
              resetForm();
              closeModal();
          }}
        >
          <StyledForm>
            <Title>Login</Title>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledField
              type="text"
              id="email"
              name="email"
              placeholder="Please enter your email"
            />
            <StyledMessage name="email" component="div" />

            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledField
              type="password"
              id="password"
              name="password"
              placeholder="Please enter your password"
            />
            <StyledMessage name="password" component="div" />

            <Button
              margin="20px auto 0 auto"
              height="50px"
              width="100%"
              type="submit"
            >
              Login
            </Button>
            <Text>
              Don't have an account yet?
              <Span>
                <Btn type="button" onClick={() => setIsRegisterForm(true)}>
                  Register
                </Btn>
              </Span>
            </Text>
          </StyledForm>
        </Formik>
      )}
    </>
  );
};

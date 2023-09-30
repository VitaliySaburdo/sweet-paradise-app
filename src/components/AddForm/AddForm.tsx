import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { Button } from "../Button/Button";
import {
  StyledForm,
  Title,
  StyledLabel,
  StyledField,
  StyledMessage,
} from "./AddForm.styled";

export const AddForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledForm>
        <Title>Add goods</Title>
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
      </StyledForm>

      <button onClick={() => dispatch(logOut() as any)}>Logout</button>
    </>
  );
};

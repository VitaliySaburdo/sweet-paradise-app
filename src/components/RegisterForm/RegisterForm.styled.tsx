import { styled } from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledField = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  &:last-child{
    margin-bottom: 20px;
  }
`;

export const StyledLabel = styled.label`
  width: 343px;
  font-size: 15px;
`;

export const StyledMessage = styled(ErrorMessage)`
  font-size: 12px;
`;

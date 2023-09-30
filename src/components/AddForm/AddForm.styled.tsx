import styled, { keyframes } from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
import { Button } from "../Button/Button";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 16px;
  margin: 0 auto;
`;

export const StyledField = styled(Field)`
  margin: 0;
  height: 40px;
  padding: 12px 42px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 20px;
  cursor: pointer;
  transition-property: border-color, outline-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 3px;
  &:focus {
    outline-color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
  margin-bottom: 4px;
  margin-left: 8px;
`;

export const StyledMessage = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
  animation: ${fadeIn} 0.5s ease-in-out;
  margin: 0 auto;
`;

export const StyledFieldIngredients = styled(Field)`
  margin: 0;
  height: 160px;
  padding: 12px 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition-property: border-color, outline-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 3px;
  &:focus {
    outline-color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const LogoutBtn = styled(Button)`
  display: block;
  width: 120px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledFileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFileInput = styled(Field)`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  

  opacity: 0; 
  position: absolute;
   cursor: pointer;
`;

export const StyledFileInputLabel = styled.label`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 14px;
  margin-top: 10px;
 

  &:hover {
    background-color: #2980b9;
  }
`;
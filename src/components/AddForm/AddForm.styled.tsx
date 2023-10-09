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

export const NextBtn = styled(Button)`
width: 130px;
height: 40px;
margin-top: 20px;
margin-left: auto;
`

export const PrevBtn = styled(Button)`
width: 130px;
height: 40px;
margin-top: 20px;
margin-right: auto;
`

export const AddBtn = styled(Button)`
width: 130px;
height: 40px;
margin-top: 20px;
margin-left: auto;
`

export const Title = styled.h2`
  font-weight: 16px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  margin: 0;
  height: 40px;
  font-size: 16px;
  padding: 5px 22px;
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
  font-size: 14px;
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
  width: 180px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledFileInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFileInput = styled.input`
background-color: #3498db;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  

  /* opacity: 0;  */
  position: absolute;
  bottom: 50px;
    cursor: pointer;
`;

export const StyledFileInputLabel = styled.label`
 display: flex;
  justify-content: center;
  align-items: center; 
  background-color: #FFFFFF;
  color: #000000;
  border: 2px solid rgba(33, 33, 33, 0.2);
  min-width: 140px;
  min-height: 60px;
  border-radius: 14px;
  margin-top: 10px;
 margin-bottom: 10px;
 cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.secondaryColor};
  }
`;
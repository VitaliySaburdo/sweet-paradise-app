import styled, {keyframes} from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #444251;
  font-family: Montserrat;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 90px;
`;

export const StyledText = styled.p`
  position: absolute;
  bottom: 43%;
  left: -13%;
  color: #9c0746;
  font-family: Sail;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  rotate: 270deg;
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #ffd4dd;
  width: 940px;
  height: 604px;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: 500px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 68px 68px 82px 68px;
`;

export const FormTitle = styled.h3`
color: #9C0746;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 18px;
`;

export const FormText = styled.p`
color: #444251;
text-align: center;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 125.6%;
margin-bottom: 45px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    outline-color: #9c0746;
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
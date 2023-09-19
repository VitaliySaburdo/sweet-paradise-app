import styled, { keyframes } from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

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
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
  margin-bottom: 4px;
  margin-left: 8px;
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

export const StyledMessage = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
  animation: ${fadeIn} 0.5s ease-in-out;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: #ffd4dd;
  filter: drop-shadow(0px 4px 30px rgba(67, 6, 32, 0.3));
  padding: 10px;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

export const Block = styled.div`
  margin-top: 53px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-top: 51px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-top: 71px;
  }
`;

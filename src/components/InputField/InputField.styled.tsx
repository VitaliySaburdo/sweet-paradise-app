import styled from "styled-components";
import { Field } from "formik";

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
import styled from "styled-components";
import { Button } from "../Button/Button";

export const Wrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 345px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 394px;
  }
`;

export const DeleteBtn = styled(Button)`
  background-color: #be3333;
  &:hover {
    background-color: red;
  }
`;

export const Img = styled.img`
  width: 236px;
  margin-bottom: 13px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 320px;
  }
`;

export const DeleteTitle = styled.h3`
  margin-top: 10px;
  text-align: center;
  margin-bottom: 30px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ConfirmBtn = styled(Button)`
  width: 140px;
  height: 50px;
  background-color: #be3333;
  &:hover {
    background-color: red;
  }
`;

export const CancelBtn = styled(Button)`
  width: 140px;
  height: 50px;
  background-color: #035a03;
    &:hover {
    background-color: green;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.secondaryColor};
  text-align: center;
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 18px;
  &:first-letter {
    text-transform: uppercase;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-bottom: 12px;
  }
`;

export const Text = styled.p`
  width: 220px;
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 19px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 100%;
  }
`;

export const Params = styled.p`
  color: ${(props) => props.theme.colors.secondaryColor};
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 29px;
`;

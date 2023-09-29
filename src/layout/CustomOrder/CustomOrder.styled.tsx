import styled from "styled-components";
import { Section } from "../../components/Section/Section";
import box from "../../images/CustomOrder/box.png";
import box_md from "../../images/CustomOrder/box_md.png";
import box_sm from "../../images/CustomOrder/box_sm.png";
import { Button } from "../../components/Button/Button";
// import leaf from '../../images/CustomOrder/leaf.png';
// import leaf_blur from '../../images/CustomOrder/leaf_blur.png';

export const StyledSection = styled(Section)`
  border: 1px solid #000;
  padding-top: 0;
  padding-bottom: 0;
  background-image: url(${box_sm}),
    linear-gradient(97deg, #fca4c9 -7.93%, #fe71ad 55.51%, #b44e79 104.2%);
  background-position: center 40%;
  background-repeat: no-repeat;
  @media screen and (${(props) => props.theme.media.md}) {
    background-image: url(${box_md}),
      linear-gradient(97deg, #fca4c9 -7.93%, #fe71ad 55.51%, #b44e79 104.2%);
    background-position: center 95%;
    background-repeat: no-repeat;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    background-image: url(${box}),
      linear-gradient(97deg, #fca4c9 -7.93%, #fe71ad 55.51%, #b44e79 104.2%);
    background-position: 80% 100%;
    background-repeat: no-repeat;
  }
`;

export const Box = styled.div`
  margin-top: 180px;
  margin-bottom: 190px;

  @media screen and (${(props) => props.theme.media.md}) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 732px;
    width: 500px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 190px;
  }
`;

export const Title = styled.h2`
  font-family: Montserrat;
  text-align: center;
  font-size: 24px;
  color: #a0114e;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 400px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 50px;
    text-align: center;
    margin-bottom: 40px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    text-align: start;
  }
`;

export const AccentText = styled.span`
  color: #ffffff;
`;

export const Text = styled.p`
  text-align: center;
  color: #fff;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 51px;
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 22px;
    text-align: start;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    align-items: start;
  }
`;

export const StyledField = styled.input`
  background-color: transparent;
  width: 255px;
  height: 27px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid 1px #ffffff;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ffffff;
  }
  color: #ffffff;
`;

export const Img = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledLabel = styled.label`
  position: relative;
  &:first-child {
    margin-bottom: 17px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
`;

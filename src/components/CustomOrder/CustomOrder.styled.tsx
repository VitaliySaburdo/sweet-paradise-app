import styled from "styled-components";
import { Section } from "../Section/Section";
import box from "../../images/CustomOrder/box.png";
// import leaf from '../../images/CustomOrder/leaf.png';
// import leaf_blur from '../../images/CustomOrder/leaf_blur.png';

export const StyledSection = styled(Section)`
  border: 1px solid #000;
  padding-top: 0;
  padding-bottom: 0;
  @media screen and (${(props) => props.theme.media.md}) {
    background-image: linear-gradient(
      97deg,
      #fca4c9 -7.93%,
      #fe71ad 55.51%,
      #b44e79 104.2%
    );
    /* background-position: 80% 100%; */
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
  width: 500px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Title = styled.h2`
  font-family: Montserrat;
  font-size: 50px;
  color: #a0114e;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 40px;
  @media screen and (${(props) => props.theme.media.md}) {
    text-align: center;
  }
`;

export const AccentText = styled.span`
  color: #ffffff;
`;

export const Text = styled.p`
  color: #fff;
  font-family: Open Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 51px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (${(props) => props.theme.media.md}) {
    align-items: center;
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

  &:first-child {
    margin-bottom: 17px;
  }
  &:last-child {
    margin-bottom: 40px;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: 50%;
  top: 0;
  @media screen and (${(props) => props.theme.media.md}) {
    right: 0;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
`;

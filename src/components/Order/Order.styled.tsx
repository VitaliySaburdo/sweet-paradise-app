import styled from "styled-components";
import InputMask from 'react-input-mask'; 
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import chocolate_1 from "../../images/Order/chocolate_1.png";
import chocolate_2 from "../../images/Order/chocolate_2.png";
import cookies from "../../images/Order/cookies.png";


export const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 60px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 44px;
    margin-bottom: 90px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 50px;
  }
`;

export const StyledContainer = styled(Container)`
  padding: 0;
  @media screen and (${(props) => props.theme.media.lg}) {
    background-image: url(${chocolate_1}), url(${chocolate_2});
    background-position: 10% 95%, 95% 95%;
    background-repeat: no-repeat;
  }
`;

export const StyledText = styled.p`
  display: none;
  @media screen and (${(props) => props.theme.media.md}) {
    display: block;
    position: absolute;
    bottom: 43%;
    left: -23.5%;
    color: ${(props) => props.theme.colors.secondaryColor};
    font-family: Sail;
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    rotate: 270deg;
    white-space: nowrap;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    left: -13%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primaryColor};
  width: 320px;
  height: 550px;
  margin: 0 auto;
  border-radius: 10px;
  @media screen and (${(props) => props.theme.media.md}) {
    border-radius: 0;
    width: 728px;
    height: 604px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    background-image: url(${cookies});
    background-position: 105% 40%;
    background-repeat: no-repeat;
    width: 940px;
  }
`;

export const FormWrapper = styled.div`
  height: 96%;
  width: 300px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.witeBcgColor};
  padding: 45px 60px;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (${(props) => props.theme.media.md}) {
    height: 100%;
    width: 500px;
    padding: 68px 68px 82px 68px;
  }
`;

export const FormTitle = styled.h3`
  color: ${(props) => props.theme.colors.secondaryColor};
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 18px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 30px;
  }
`;

export const FormText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125.6%;
  margin-bottom: 45px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 18px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledField = styled.input`
  margin: 0;
  height: 60px;
  padding: 12px 42px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 30px;
  cursor: pointer;
  transition-property: border-color, outline-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 25px;
  &:focus {
    outline-color: ${(props) => props.theme.colors.secondaryColor};
  }
  @media screen and (${(props) => props.theme.media.md}) {
    height: 40px;
    border-radius: 20px;
  }
`;

export const PhoneField = styled(InputMask)`
  margin: 0;
  height: 60px;
  padding: 12px 42px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 30px;
  cursor: pointer;
  transition-property: border-color, outline-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 25px;
  &:focus {
    outline-color: ${(props) => props.theme.colors.secondaryColor};
  }
  @media screen and (${(props) => props.theme.media.md}) {
    height: 40px;
    border-radius: 20px;
  }
`;

export const StyledButton = styled(Button)`
  margin-bottom: 42px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125.6%;
`;

export const StyledLabel = styled.label`
  flex-direction: row;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
  margin-bottom: 4px;
  margin-left: 8px;
`;



import styled, { css } from "styled-components";
import { Button } from "../Button/Button";
import ellipse from "../../images/Hero/Ellipse.png";
import leaf from "../../images/Hero/leaf.png";
import raspberries from "../../images/Hero/raspberries.png";

export const MainWrapper = styled.div`
  @media screen and (${(props) => props.theme.media.lg}) {
    background-image: url(${leaf}), url(${ellipse}), url(${raspberries});
    background-position: 70% 63%, 100% 0, 30.5% 82%;
    background-repeat: no-repeat;
  }
`;

export const Wrapper = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-top: 196px;
    width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-top: 298px;
    width: 620px;
    margin-left: 0;
    margin-right: auto;
  }
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  color: ${(props) => props.theme.colors.secondaryColor};
  font-size: 30px;
  margin-bottom: 15px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 60px;
    margin-bottom: 38px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 80px;
    margin-bottom: 41px;
    margin-right: auto;
  }
`;

export const Slogan = styled.h2`
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 46px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    text-align: start;
    margin-bottom: 60px;
  }
`;

export const VideoContainer = styled.iframe`
  display: block;
  margin-top: 54px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.35);
  width: 312px;
  height: 202px;
  @media screen and (${(props) => props.theme.media.md}) {
    margin-top: 140px;
    width: 654px;
    height: 424px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    margin-left: 0;
    margin-right: auto;
    margin-top: 206px;
    width: 340px;
    height: 220px;
    margin-bottom: 180px;
  }
`;
export const StyledBtn = styled(Button)`
  ${(props) => css`
    @media screen and (${props.theme.media.lg}) {
      margin-right: auto;
    }
  `}
`;

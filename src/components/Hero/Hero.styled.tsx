import styled, { css } from "styled-components";
import { Button } from "../Button/Button";
import ellipse from "../../images/Hero/Ellipse.png";
import leaf from "../../images/Hero/leaf.png";
import raspberries from "../../images/Hero/raspberries.png";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";

export const StyledSection = styled(Section)`
  overflow: hidden;
  padding-bottom: 0;
  padding-top: 85px;
  @media screen and (${(props) => props.theme.media.md}) {
    padding-top: 196px;
        background-image: url(${leaf}), url(${ellipse});
    background-position: 25% 63%, -120% -180%;
    background-repeat: no-repeat;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    padding-top: 298px;
    padding-bottom: 180px;
    background-image: url(${leaf}), url(${raspberries}), url(${ellipse});
    background-position: 68% 63%, 30.5% 82%, 100% 0;
    background-repeat: no-repeat;
  }
`;

export const MainWrapper = styled(Container)`
  @media screen and (${(props) => props.theme.media.smToLg}) {
    overflow: hidden;
  }
`;

export const SweetWrapper = styled.p`
  display: none;
  @media screen and (${(props) => props.theme.media.lg}) {
    display: block;
    position: absolute;
    top: -250px;
    left: -450px;
    color: #9c0746;
    font-family: Sail;
    font-size: 400px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.03;
    transform: rotate(-40deg);
  }
`;

export const ParadiseWrapper = styled.p`
  display: none;
  @media screen and (${(props) => props.theme.media.lg}) {
    display: block;
    position: absolute;
    z-index: -1;
    top: -160px;
    left: -220px;
    color: #9c0746;
    font-family: Montserrat;
    font-size: 400px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.03;
    transform: rotate(-40deg);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
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
  }
`;
export const StyledBtn = styled(Button)`
  ${(props) => css`
    @media screen and (${props.theme.media.lg}) {
      margin-right: auto;
    }
  `}
`;

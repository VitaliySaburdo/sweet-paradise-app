import {
  StyledSection,
  MainWrapper,
  SweetWrapper,
  ParadiseWrapper,
  Wrapper,
  Title,
  Slogan,
  VideoContainer,
  StyledBtn,
} from "./Hero.styled";

import { Slider } from "../../components/Slider/Slider";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <StyledSection>
        <div style={{ position: "relative"}}>
        <MainWrapper>
            <SweetWrapper>Sweet</SweetWrapper>
            <ParadiseWrapper>Paradise</ParadiseWrapper>
            <Wrapper>
              <Title>Sweet Paradise</Title>
              <Slogan>We will make your life is sweeter!</Slogan>
              <Link to={"/goods"}>
                <StyledBtn>Choose a dessert</StyledBtn>
              </Link>
            </Wrapper>
            <Slider />
          <VideoContainer
            title="confectionery"
            src="https://www.youtube.com/embed/mHsOfgF84aA"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></VideoContainer>
          </MainWrapper>
          </div>
      </StyledSection>
    </>
  );
};

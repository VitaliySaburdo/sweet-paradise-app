import { Container } from "../Container/Container";
import {
  MainWrapper,
  Wrapper,
  Title,
  Slogan,
  VideoContainer,
  StyledBtn,
} from "./Hero.styled";

import { Slider } from "../Slider/Slider";

export const Hero = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <div style={{ position: "relative" }}>
            <Wrapper>
              <Title>Sweet Paradise</Title>
              <Slogan>We will make your life is sweeter!</Slogan>
              <StyledBtn>Choose a dessert</StyledBtn>
            </Wrapper>
            <Slider />
          </div>
          <VideoContainer
            title="confectionery"
            src="https://www.youtube.com/embed/mHsOfgF84aA"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></VideoContainer>
        </Container>
      </MainWrapper>
    </>
  );
};

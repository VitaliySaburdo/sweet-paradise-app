import { Container } from "../Container/Container";
import { Wrapper, Title, Slogan, VideoContainer } from "./Hero.styled";
import { Button } from "../Button/Button";
import { Slider } from "../Slider/Slider";

export const Hero = () => {
  return (
    <>
      <Container>
        <div style={{position: 'relative'}}>
        <Wrapper>
          <Title>Sweet Paradise</Title>
          <Slogan>We will make your life is sweeter!</Slogan>
          <Button>Choose a dessert</Button>
        </Wrapper>
        
        <VideoContainer
          title="confectionery"
          src="https://www.youtube.com/embed/mHsOfgF84aA"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></VideoContainer>
          <Slider />
          </div>
      </Container>
    </>
  );
};

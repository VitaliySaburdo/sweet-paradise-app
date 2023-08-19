import { Container } from "../Container/Container";
import { Wrapper, Title, Slogan } from "./Hero.styled";
import { Button } from "../Button/Button";
import { Slider } from "../Slider/Slider";

export const Hero = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Sweet Paradise</Title>
          <Slogan>We will make your life is sweeter!</Slogan>
          <Button>Choose a dessert</Button>
        </Wrapper>
        <Slider />
      </Container>
    </>
  );
};

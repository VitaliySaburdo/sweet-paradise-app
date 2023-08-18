import { Container } from "../Container/Container";
import arr_left from "../../images/Hero/arr_left.png";
import arr_right from "../../images/Hero/arr_right.png";
import { Wrapper, Title, Slogan,SliderWrapper, TextWrapper } from "./Hero.styled";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Sweet Paradise</Title>
          <Slogan>We will make your life is sweeter!</Slogan>
          <Button>Choose a dessert</Button>
        </Wrapper>
        <SliderWrapper></SliderWrapper>
        <TextWrapper>vanilla</TextWrapper>
        <button type="button">
          <img src={arr_left} alt="arrow" />
        </button>
        <button type="button">
          <img src={arr_right} alt="arrow" />
        </button>
      </Container>
    </>
  );
};

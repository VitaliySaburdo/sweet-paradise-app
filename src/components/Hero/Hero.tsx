import { Container } from "../Container/Container";
import arr_left from '../../images/Hero/arr_left.png'
import arr_right from '../../images/Hero/arr_right.png'

export const Hero = () => {
  return (
    <>
      <Container>
        <h1>Sweet Paradise</h1>
              <h2>We will make your life is sweeter!</h2>
              <button type="button">Choose a dessert</button>
              <p>vanilla</p>
              <button type="button"><img src={arr_left} alt="arrow" /></button>
              <button type="button"><img src={arr_right} alt="arrow" /></button>
      </Container>
    </>
  );
};

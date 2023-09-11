import { Container } from "../Container/Container";
import { Wrapper } from "./Catalog.styled";

export const Catalog = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <h1>Yummy catalog</h1>
        <ul>
          <li>
            <img src="" alt="Eclair" />
            <p>Eclair</p>
          </li>
          <li>
            <img src="" alt="Macaron" />
            <p>Macaron</p>
          </li>
          <li>
            <img src="" alt="Cupcake" />
            <p>Cupcake</p>
          </li>
          <li>
            <img src="" alt="Muffin" />
            <p>Muffin</p>
          </li>
          <li>
            <img src="" alt="Donut" />
            <p>Donut</p>
          </li>
        </ul>
        </Wrapper>
      </Container>
    </>
  );
};

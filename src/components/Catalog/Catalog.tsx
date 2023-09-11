import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
import { CatalogList, CatalogTitle } from "./Catalog.styled";

export const Catalog = () => {
  return (
    <>
      <Section>
      <Container>
          <CatalogTitle>Yummy catalog</CatalogTitle>
        <CatalogList>
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
        </CatalogList>
        </Container>
        </Section>
    </>
  );
};

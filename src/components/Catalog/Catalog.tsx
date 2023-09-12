import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
import { CatalogList, CatalogTitle } from "./Catalog.styled";
import eclair from "../../images/Goods/eclair.png";
import macaron from "../../images/Goods/macaron.png";
import cupcake from "../../images/Goods/cupcake.png";
import muffin from "../../images/Goods/muffin.png";
import donut from "../../images/Goods/donut.png";

export const Catalog = () => {
  return (
    <>
      <Section>
        <Container>
          <CatalogTitle>Yummy catalog</CatalogTitle>
          <CatalogList>
            <li>
              <img src={eclair} alt="Eclair" />
              <p>Eclair</p>
            </li>
            <li>
              <img src={macaron} alt="Macaron" />
              <p>Macaron</p>
            </li>
            <li>
              <img src={cupcake} alt="Cupcake" />
              <p>Cupcake</p>
            </li>
            <li>
              <img src={muffin} alt="Muffin" />
              <p>Muffin</p>
            </li>
            <li>
              <img src={donut} alt="Donut" />
              <p>Donut</p>
            </li>
          </CatalogList>
        </Container>
      </Section>
    </>
  );
};

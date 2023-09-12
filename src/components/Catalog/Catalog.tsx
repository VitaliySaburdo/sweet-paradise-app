import { Container } from "../Container/Container";
import { Section } from "../Section/Section";
import {
  CatalogList,
  CatalogTitle,
  CatalogItem,
  CatalogImg,
  CatalogText,
  CatalogBtn,
} from "./Catalog.styled";
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
            <CatalogItem>
              <CatalogBtn>
                <CatalogImg src={eclair} alt="Eclair" />
                <CatalogText>Eclair</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn>
                <CatalogImg src={macaron} alt="Macaron" />
                <CatalogText>Macaron</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn>
                <CatalogImg src={cupcake} alt="Cupcake" />
                <CatalogText>Cupcake</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn>
                <CatalogImg src={muffin} alt="Muffin" />
                <CatalogText>Muffin</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn>
                <CatalogImg src={donut} alt="Donut" />
                <CatalogText>Donut</CatalogText>
              </CatalogBtn>
            </CatalogItem>
          </CatalogList>
        </Container>
      </Section>
    </>
  );
};

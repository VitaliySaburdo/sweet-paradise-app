import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  console.log(selectedCategory);

  const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const category = event.currentTarget.getAttribute("data-category");
    setSelectedCategory(category);
  };

  return (
    <>
      <Section>
        <Container>
          <CatalogTitle>Yummy catalog</CatalogTitle>
          <CatalogList>
            <CatalogItem>
              <CatalogBtn data-category="eclair" onClick={handleCategoryClick}>
                <CatalogImg src={eclair} alt="Eclair" />
                <CatalogText>Eclair</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn data-category="macaron" onClick={handleCategoryClick}>
                <CatalogImg src={macaron} alt="Macaron" />
                <CatalogText>Macaron</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn data-category="cupcake" onClick={handleCategoryClick}>
                <CatalogImg src={cupcake} alt="Cupcake" />
                <CatalogText>Cupcake</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn data-category="muffin" onClick={handleCategoryClick}>
                <CatalogImg src={muffin} alt="Muffin" />
                <CatalogText>Muffin</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn data-category="donut" onClick={handleCategoryClick}>
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

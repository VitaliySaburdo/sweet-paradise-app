import { useState, useEffect } from "react";

import {
  Box,
  StyledContainer,
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
import { Section } from "../../components/Section/Section";
import { ProductList } from "../../components/ProductList/ProductList";
import { ProductProps } from "../../components/App/App.types";

interface CategoryProps {
  fetchProductsByCategory: (id: string) => void;
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
  products: ProductProps[];
}

export const Catalog: React.FC<CategoryProps> = ({
  fetchProductsByCategory,
  onAdd,
  loading,
  orders,
  products,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "64dc5d6039fe49cdd5fb98ff"
  );

  useEffect(() => {
    fetchProductsByCategory(selectedCategory);
  }, [fetchProductsByCategory, selectedCategory]);

  const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const category = event.currentTarget.getAttribute("data-category");
    if (category !== null) {
      setSelectedCategory(category);
      fetchProductsByCategory(category);
    }
  };

  return (
    <>
      <Box/>
      <Section>
        <StyledContainer>
          <CatalogTitle>Yummy catalog</CatalogTitle>
          <CatalogList>
            <CatalogItem>
              <CatalogBtn
                data-category="64dc639ea1893d42a2047f1b"
                onClick={handleCategoryClick}
              >
                <CatalogImg src={eclair} alt="Eclair" />
                <CatalogText>Eclair</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn
                data-category="64dc6219a1893d42a2047f17"
                onClick={handleCategoryClick}
              >
                <CatalogImg src={macaron} alt="Macaron" />
                <CatalogText>Macaron</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn
                data-category="64dc5d6039fe49cdd5fb98ff"
                onClick={handleCategoryClick}
              >
                <CatalogImg src={cupcake} alt="Cupcake" />
                <CatalogText>Cupcake</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn
                data-category="64dc63c6a1893d42a2047f1f"
                onClick={handleCategoryClick}
              >
                <CatalogImg src={muffin} alt="Muffin" />
                <CatalogText>Muffin</CatalogText>
              </CatalogBtn>
            </CatalogItem>
            <CatalogItem>
              <CatalogBtn
                data-category="64dbb87b81bfef72aa005ab4"
                onClick={handleCategoryClick}
              >
                <CatalogImg src={donut} alt="Donut" />
                <CatalogText>Donut</CatalogText>
              </CatalogBtn>
            </CatalogItem>
          </CatalogList>
          <ProductList
            products={products}
            loading={loading}
            onAdd={onAdd}
            orders={orders}
          />
        </StyledContainer>
      </Section>
    </>
  );
};

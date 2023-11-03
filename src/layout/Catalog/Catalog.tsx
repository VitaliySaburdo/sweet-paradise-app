import { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/reduxHook";
import { selectCategories } from "../../redux/product/productsSelectors";
import { ProductProps } from "../../App/App.types";
import { Section } from "../../components/Section/Section";
import { ProductList } from "../../components/ProductList/ProductList";
import {
  Box,
  StyledContainer,
  CatalogList,
  CatalogTitle,
  CatalogItem,
  CatalogImg,
  CatalogText,
  CatalogBtn,
  BtnLeft,
  BtnRight,
} from "./Catalog.styled";
import leftBtn from "../../images/Catalog/leftBtn.png";
import rightBtn from "../../images/Catalog/rightBtn.png";

interface CategoryProps {
  fetchProductsByCategory: (id: string) => void;
  loading: boolean;
  products: ProductProps[];
  changedCategory: (id: string) => void;
}

export const Catalog: React.FC<CategoryProps> = ({
  fetchProductsByCategory,
  loading,
  products,
  changedCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "6544cf5810c5deaa725bcae1"
  );
  const [scrollposition, setScrollPosition] = useState(-200);

  const allCategories = useAppSelector(selectCategories);

  const currentCategories = allCategories.filter(
    (item) => item.name !== "novelties"
  );

  const scrollLeft = () => {
    if (scrollposition <= -700) {
      return;
    } else {
      setScrollPosition(scrollposition - 100);
    }
  };

  const scrollRight = () => {
    if (scrollposition >= 0) {
      return;
    } else {
      setScrollPosition(scrollposition + 100);
    }
  };

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
      <Box />
      <Section>
        <StyledContainer>
          <CatalogTitle>Yummy catalog</CatalogTitle>
          <CatalogList scrollPosition={scrollposition}>
            {currentCategories.length &&
              currentCategories.map((category) => {
                return (
                  <CatalogItem>
                    <CatalogBtn
                      data-category={category._id}
                      onClick={handleCategoryClick}
                    >
                      <CatalogImg
                        src={
                          "https://sweet-paradise-api.onrender.com/static/" +
                          category.img
                        }
                        alt={category.name}
                      />
                      <CatalogText>{category.name}</CatalogText>
                    </CatalogBtn>
                  </CatalogItem>
                );
              })}
          </CatalogList>
          <BtnLeft onClick={scrollLeft}>
            {" "}
            <img src={leftBtn} alt="button" width={20} />{" "}
          </BtnLeft>
          <BtnRight onClick={scrollRight}>
            <img src={rightBtn} alt="button" width={20} />
          </BtnRight>
          <ProductList
            products={products}
            loading={loading}
            changedCategory={changedCategory}
          />
        </StyledContainer>
      </Section>
    </>
  );
};

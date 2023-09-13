import { useState } from "react";
import { useEffect } from "react";
import { getProductsByCategories } from "../components/apiService/apiService";
import { Catalog } from "../components/Catalog/Catalog";
import { ProductList } from "../components/ProductList/ProductList";
import { ProductProps } from "../components/App/App.types";
import { Section } from "../components/Section/Section";
import { Container } from "../components/Container/Container";

interface CatalogProps {
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
}

export const Goods: React.FC<CatalogProps> = ({ onAdd, loading, orders }) => {
  const [category, setCategory] = useState<string>("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (category) {
          const data = await getProductsByCategories(category);
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [category]);

  const handleChangeCategory = (id: string) => {
    setCategory(id);
    // onCategoryChange(products);
  };

  return (
    <>
      <Section>
        <Container>
        <Catalog fetchProductsByCategory={handleChangeCategory} />
        <ProductList
          products={products}
          loading={loading}
          onAdd={onAdd}
          orders={orders}
          />
          </Container>
      </Section>
    </>
  );
};

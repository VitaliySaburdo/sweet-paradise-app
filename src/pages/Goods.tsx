import { useState } from "react";
import { useEffect } from "react";
import { getProductsByCategories } from "../services/apiService";
import { Catalog } from "../layout/Catalog/Catalog";
import { Order } from "../components/Order/Order";
import { ProductProps } from "../app/App.types";

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
  };

  return (
    <>
      <Catalog
        products={products}
        loading={loading}
        onAdd={onAdd}
        orders={orders}
        fetchProductsByCategory={handleChangeCategory}
      />
      <Order/>
    </>
  );
};

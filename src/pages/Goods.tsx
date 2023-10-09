import { useState } from "react";
import { useEffect } from "react";
import { getProductsByCategories } from "../services/apiService";
import { Catalog } from "../layout/Catalog/Catalog";
import { Order } from "../components/Order/Order";
import { ProductProps } from "../App/App.types";

interface CatalogProps {
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
  addProductCategory: string;
}

export const Goods: React.FC<CatalogProps> = ({
  onAdd,
  loading,
  orders,
  addProductCategory,
}) => {
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

    useEffect(() => {
    async function fetchData() {
      try {
        if (addProductCategory) {
          const data = await getProductsByCategories(addProductCategory);
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [addProductCategory]);

  console.log("id:", addProductCategory);

  const handleChangeCategory = (id: string) => {
    setCategory(id);
  };

  const changedCategory = async (id: string) => {
    setCategory(id);
    const data = await getProductsByCategories(category);
    setProducts(data);
  };

  return (
    <>
      <Catalog
        products={products}
        loading={loading}
        onAdd={onAdd}
        orders={orders}
        fetchProductsByCategory={handleChangeCategory}
        changedCategory={changedCategory}
      />
      <Order />
    </>
  );
};

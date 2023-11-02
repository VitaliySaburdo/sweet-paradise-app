import { useState } from "react";
import { useEffect } from "react";
import { getProductsByCategories } from "../services/apiService";
import { Catalog } from "../layout/Catalog/Catalog";
import { Order } from "../components/Order/Order";

const Goods: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (category) {
          const data = await getProductsByCategories(category);
          setProducts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [category]);

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
        fetchProductsByCategory={handleChangeCategory}
        changedCategory={changedCategory}
      />
      <Order />
    </>
  );
};

export default Goods;

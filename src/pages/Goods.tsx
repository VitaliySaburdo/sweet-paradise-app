import { useState } from "react";
import { useEffect } from "react";
import { getProductsByCategories } from "../components/apiService/apiService";
import { Catalog } from "../components/Catalog/Catalog";

export const Goods = () => {
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductsByCategories(category);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [category]);

  const handleChangeCategory = (id: string) => {
    console.log(typeof id);
    setCategory(id);
  };

  return (
    <>
      <Catalog fetchProductsByCategory={handleChangeCategory} />
    </>
  );
};

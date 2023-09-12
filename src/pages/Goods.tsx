import { useEffect } from 'react';
import {getProductsByCategories} from '../components/apiService/apiService';
import { Catalog } from "../components/Catalog/Catalog";

export const Goods = () => {
    useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductsByCategories("64dcc4148efcb0f7600c8cd0");
        // setNovelties(data);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setLoading(false);
      }
    }

    fetchData();
    }, []);
  
  return (
    <>
      <Catalog />
    </>
  );
};

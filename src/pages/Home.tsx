import { useEffect, useState } from "react";
import { getProductsByCategories } from "../services/apiService";
import { Benefits } from "../layout/Benefits/Benefits";
import { Hero } from "../layout/Hero/Hero";
import { Novelties } from "../layout/Novelties/Novelties";
import { Work } from "../layout/Work/Work";
import {ProductProps} from '../App/App.types';
import { CustomOrder } from "../layout/CustomOrder/CustomOrder";


interface NoveltiesProps {
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
}

export const Home: React.FC<NoveltiesProps> = ({ onAdd, orders }) => {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductsByCategories("64dcc4148efcb0f7600c8cd0");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Hero />
      <Benefits />
      <Novelties products={products} loading={loading} onAdd={onAdd} orders={orders} />
      <CustomOrder/>
      <Work />
    </>
  );
};

import { useEffect, useState } from "react";
import { getProductsByCategories } from "../components/apiService/apiService";
import { Benefits } from "../components/Benefits/Benefits";
import { Hero } from "../components/Hero/Hero";
import { Novelties } from "../components/Novelties/Novelties";
import { Work } from "../components/Work/Work";

export interface NoveltiesItem {
  _id: string;
  name: string;
  price: number;
  weight: string;
  category: string;
  favorite: boolean;
  img: string;
  ingredients: string;
  owner: string;
}


export const Home = () => {
  const [novelties, setNovelties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<NoveltiesItem[]>([]);
  
  const addOrder = (novelty: NoveltiesItem): void  => {
    setOrders([...orders, novelty])
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductsByCategories("64dcc4148efcb0f7600c8cd0");
        setNovelties(data);
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
      <Novelties novelties={novelties} loading={loading} onAdd={addOrder} />
      <Work/>
    </>
  );
};

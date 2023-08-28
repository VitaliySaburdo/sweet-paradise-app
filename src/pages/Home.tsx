import { useEffect, useState } from "react";
import { getProductsByCategories } from "../components/apiService/apiServise";
import { Benefits } from "../components/Benefits/Benefits";
import { Hero } from "../components/Hero/Hero";
import { Novelties } from "../components/Novelties/Novelties";

export const Home = () => {
  const [novelties, setNovelties] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <Novelties novelties={novelties} loading={loading} />
    </>
  );
};

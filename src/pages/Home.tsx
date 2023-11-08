import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { useEffect } from "react";
import { getProductsByCategories } from "../redux/product/productsOperations";
import { Benefits } from "../layout/Benefits/Benefits";
import { Hero } from "../layout/Hero/Hero";
import { Novelties } from "../layout/Novelties/Novelties";
import { Work } from "../layout/Work/Work";
import { CustomOrder } from "../layout/CustomOrder/CustomOrder";
import {
  selectIsLoading,
  selectProducts,
} from "../redux/product/productsSelectors";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectIsLoading);

  useEffect(() => {
      dispatch(getProductsByCategories("6544d07010c5deaa725bcae4"));
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Benefits />
      <Novelties products={products} loading={loading} />
      <CustomOrder />
      <Work />
    </>
  );
};

export default Home;

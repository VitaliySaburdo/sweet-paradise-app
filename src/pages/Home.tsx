import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { useEffect } from "react";
import { getProductsByCategories } from "../redux/product/productsOperations";
import { Benefits } from "../layout/Benefits/Benefits";
import { Hero } from "../layout/Hero/Hero";
import { Novelties } from "../layout/Novelties/Novelties";
import { Work } from "../layout/Work/Work";
import {ProductProps} from '../App/App.types';
import { CustomOrder } from "../layout/CustomOrder/CustomOrder";
import { selectIsLoading, selectProducts } from "../redux/product/productsSelectors";

interface NoveltiesProps {
  orders: ProductProps[];
};


export const Home: React.FC<NoveltiesProps> = ({ orders }) => {

  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectIsLoading);

  useEffect(() => {
      dispatch(getProductsByCategories("64dcc4148efcb0f7600c8cd0"));
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Benefits />
      <Novelties products={products} loading={loading} orders={orders} />
      <CustomOrder/>
      <Work />
    </>
  );
};

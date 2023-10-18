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
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
};


export const Home: React.FC<NoveltiesProps> = ({ onAdd, orders }) => {

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
      <Novelties products={products} loading={loading} onAdd={onAdd} orders={orders} />
      <CustomOrder/>
      <Work />
    </>
  );
};

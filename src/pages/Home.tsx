import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { useEffect } from "react";
import { getProductsByCategories } from "../redux/product/productsOperations";
import { Benefits } from "../layout/Benefits/Benefits";
import { Hero } from "../layout/Hero/Hero";
import { Novelties } from "../layout/Novelties/Novelties";
import { Work } from "../layout/Work/Work";
import { CustomOrder } from "../layout/CustomOrder/CustomOrder";
import {
  selectCategories,
  selectIsLoading,
  selectProducts,
} from "../redux/product/productsSelectors";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectIsLoading);
  const categories = useAppSelector(selectCategories);

  let _id: string | undefined;

  const novelties = categories.find((item) => item.name === "novelties");

  if (novelties) {
    _id = novelties._id;
  }

  useEffect(() => {
    if (_id) {
      dispatch(getProductsByCategories(_id));
    }
  }, [dispatch, _id]);

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

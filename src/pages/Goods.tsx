import { useState } from "react";
import { useEffect } from "react";
import { getProductsByCategories } from "../redux/product/productsOperations";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { selectIsLoading, selectProducts } from "../redux/product/productsSelectors";
import { Catalog } from "../layout/Catalog/Catalog";
import { Order } from "../components/Order/Order";


const Goods: React.FC = () => {
  const [category, setCategory] = useState<string>("");

  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsByCategories(category));
  }, [dispatch, category]);

  const handleChangeCategory = (id: string) => {
    setCategory(id);
  };

  const changedCategory = async (category: string) => {
    setCategory(category);
    dispatch(getProductsByCategories(category));
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

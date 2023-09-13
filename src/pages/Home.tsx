import { Benefits } from "../components/Benefits/Benefits";
import { Hero } from "../components/Hero/Hero";
import { ProductList } from "../components/ProductList/ProductList";
import { Work } from "../components/Work/Work";
import {ProductProps} from '../components/App/App.types';

interface NoveltiesProps {
  products: ProductProps[];
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
}

export const Home: React.FC<NoveltiesProps> = ({products, onAdd, loading, orders}) => {
  return (
    <>
      <Hero />
      <Benefits />
      <ProductList products={products} loading={loading} onAdd={onAdd} orders={orders} />
      <Work/>
    </>
  );
};

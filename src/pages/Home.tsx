import { Benefits } from "../components/Benefits/Benefits";
import { Hero } from "../components/Hero/Hero";
import { Novelties } from "../components/Novelties/Novelties";
import { Work } from "../components/Work/Work";
import {ProductProps} from '../components/App/App.types';
import { CustomOrder } from "../components/CustomOrder/CustomOrder";


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
      <Novelties products={products} loading={loading} onAdd={onAdd} orders={orders} />
      <CustomOrder/>
      <Work />
    </>
  );
};

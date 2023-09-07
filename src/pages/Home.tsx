import { Benefits } from "../components/Benefits/Benefits";
import { Hero } from "../components/Hero/Hero";
import { Novelties } from "../components/Novelties/Novelties";
import { Work } from "../components/Work/Work";
import {ProductProps} from '../components/App/App.types';

interface NoveltiesProps {
  novelties: ProductProps[];
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
}

export const Home: React.FC<NoveltiesProps> = ({novelties, onAdd, loading, orders}) => {
  return (
    <>
      <Hero />
      <Benefits />
      <Novelties novelties={novelties} loading={loading} onAdd={onAdd} orders={orders} />
      <Work/>
    </>
  );
};

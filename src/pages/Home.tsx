import { Benefits } from "../components/Benefits/Benefits";
import { Hero } from "../components/Hero/Hero";
import { Novelties } from "../components/Novelties/Novelties";
import { Work } from "../components/Work/Work";
import {ProductProps} from '../components/App/App.types';

interface NoveltiesProps {
  novelties: ProductProps[];
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
}

export const Home: React.FC<NoveltiesProps> = ({novelties, onAdd, loading}) => {
  return (
    <>
      <Hero />
      <Benefits />
      <Novelties novelties={novelties} loading={loading} onAdd={onAdd} />
      <Work/>
    </>
  );
};

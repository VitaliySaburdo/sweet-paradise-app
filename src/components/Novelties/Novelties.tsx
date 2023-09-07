import { Container } from "../Container/Container";
import { Product } from "../Product/Product";
import { Section } from "../Section/Section";
import { Title, Wrapper } from "./Novelties.styled";

export interface NoveltiesItem {
  _id: string;
  name: string;
  price: number;
  weight: string;
  category: string;
  favorite: boolean;
  img: string;
  ingredients: string;
  owner: string;
}

interface NoveltiesProps {
  novelties: NoveltiesItem[];
  loading: boolean;
}

export const Novelties: React.FC<NoveltiesProps> = ({ novelties, loading }) => {
  return (
    <>
      <Section>
      <Container>
        <Title>Try our new items</Title>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Wrapper>
            {novelties.map((product) => (
                <Product product={product } key={product._id}/>
            ))}
          </Wrapper>
        )}
        </Container>
        </Section>
    </>
  );
};

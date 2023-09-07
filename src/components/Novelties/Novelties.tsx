import { Container } from "../Container/Container";
import { Product } from "../Product/Product";
import { Section } from "../Section/Section";
import { Title, Wrapper } from "./Novelties.styled";
import { ProductProps } from "../App/App.types";

interface NoveltiesProps {
  novelties: ProductProps[];
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
}

export const Novelties: React.FC<NoveltiesProps> = ({
  novelties,
  loading,
  onAdd,
  orders,
}) => {
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
                <Product
                  product={product}
                  key={product._id}
                  onAdd={onAdd}
                  orders={orders}
                />
              ))}
            </Wrapper>
          )}
        </Container>
      </Section>
    </>
  );
};

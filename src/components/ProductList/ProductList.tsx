import { Container } from "../Container/Container";
import { Product } from "../Product/Product";
import { Section } from "../Section/Section";
import { Title, Wrapper } from "./ProductList.styled";
import { ProductProps } from "../App/App.types";

interface NoveltiesProps {
  products: ProductProps[];
  loading: boolean;
  onAdd: (novelty: ProductProps) => void;
  orders: ProductProps[];
}

export const Novelties: React.FC<NoveltiesProps> = ({
  products,
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
              {products.map((product) => (
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

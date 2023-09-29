import { Container } from "../../components/Container/Container";
import { ProductList } from "../../components/ProductList/ProductList";
import { Section } from "../../components/Section/Section";
import { Title } from "./Novelties.styled";
import { ProductProps } from "../../components/App/App.types";

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
          <ProductList
            products={products}
            loading={loading}
            onAdd={onAdd}
            orders={orders}
          />
        </Container>
      </Section>
    </>
  );
};

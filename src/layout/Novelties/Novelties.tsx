import { Container } from "../../components/Container/Container";
import { ProductList } from "../../components/ProductList/ProductList";
import { Section } from "../../components/Section/Section";
import { Title } from "./Novelties.styled";
import { ProductProps } from "../../App/App.types";

interface NoveltiesProps {
  products: ProductProps[];
  loading: boolean;
}

export const Novelties: React.FC<NoveltiesProps> = ({
  products,
  loading,
}) => {
  console.log("Novelties", loading)
  const changedCategory = (id: string) => {
    console.log(id);
  };
  return (
    <>
      <Section>
        <Container>
          <Title>Try our new items</Title>
          <ProductList
            products={products}
            loading={loading}
            changedCategory={changedCategory}
          />
        </Container>
      </Section>
    </>
  );
};

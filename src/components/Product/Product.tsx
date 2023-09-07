import { Img, Wrapper, Title, Text, Params } from "../Product/Products.styled";
import { Button } from "../Button/Button";
import { NoveltiesItem } from "../Novelties/Novelties";

interface ProductProps {
  product: NoveltiesItem;
  onAdd: (novelty: NoveltiesItem) => void;
}

export const Product: React.FC<ProductProps> = ({ product, onAdd }) => {
  return (
    <>
      <Wrapper>
        <Img
          src={"https://sweet-paradise-api.onrender.com/static/" + product.img}
          alt={product.name}
        />
        <Title>{product.name}</Title>
        <Text>{product.ingredients}</Text>
        <Params>
          {product.price} uah / {product.weight} gr
        </Params>
        <Button width="200px" onClick={() => onAdd(product)}>
          Add to Cart
        </Button>
      </Wrapper>
    </>
  );
};

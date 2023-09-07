import { Img, Wrapper, Title, Text, Params } from "../Product/Products.styled";
import { Button } from "../Button/Button";
import {ProductProps} from '../App/App.types';

interface NoveltiesItem {
  product: ProductProps;
  onAdd: (novelty: ProductProps) => void;
}

export const Product: React.FC<NoveltiesItem> = ({ product, onAdd }) => {
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

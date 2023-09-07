import { useState } from "react";
import {
  StyledText,
  Item,
  Box,
  Picture,
  Input,
  Count,
} from "./CartItem.styled";
import { ProductProps } from "../App/App.types";

interface CartItemProps {
  product: ProductProps;
}

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setCount(newValue);
    }
  };

  return (
    <>
      <Item>
        <StyledText>{product.name}</StyledText>
        <Box>
          <Picture
            src={
              "https://sweet-paradise-api.onrender.com/static/" + product.img
            }
            alt={product.name}
          />
          <button onClick={decrement} disabled={count <= 1}>
            -
          </button>
          <Input
            type="text"
            value={count}
            onChange={handleCountChange}
            min="1"
          />
          <button onClick={increment}>+</button>
        </Box>
        <Box>
          <Count>{product.price * count} uah</Count>
        </Box>
      </Item>
    </>
  );
};
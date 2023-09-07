import { useState } from "react";
import {
  StyledText,
  Item,
  Box,
  Picture,
  Input,
  Count,
  Btn,
  CloseBtn,
} from "./CartItem.styled";
import { ProductProps } from "../App/App.types";

interface CartItemProps {
  product: ProductProps;
  deleteOrder: (orders: ProductProps) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ product, deleteOrder }) => {
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
        <Box style={{justifyContent: 'space-between', marginRight: '10px'}}>
          <StyledText>{product.name}</StyledText>
          <CloseBtn onClick={() => deleteOrder(product)}>X</CloseBtn>
        </Box>
        <Box>
          <Picture
            src={
              "https://sweet-paradise-api.onrender.com/static/" + product.img
            }
            alt={product.name}
          />
          <Btn onClick={decrement} disabled={count <= 1}>
            -
          </Btn>
          <Input
            type="text"
            value={count}
            onChange={handleCountChange}
            min="1"
          />
          <Btn onClick={increment}>+</Btn>
          <Count>{product.price * count} uah</Count>
        </Box>
      </Item>
    </>
  );
};

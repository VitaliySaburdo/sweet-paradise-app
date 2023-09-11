// import { useState } from "react";
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
  increment: (id: string) => void;
  decrement: (id: string) => void;
  changeValue: (id:string, value: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
  deleteOrder,
  increment,
  decrement,
  changeValue,
}) => {
  return (
    <>
      <Item>
        <Box style={{ justifyContent: "space-between", marginRight: "10px" }}>
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
          <Btn onClick={() => decrement(product._id)}>-</Btn>
          <Input
            type="text"
            value={product.quantity || 1}
            min="1"
            onChange={(e:  React.ChangeEvent<HTMLInputElement>) => {
              changeValue(product._id, parseInt(e.target.value, 10));
            }}
          />
          <Btn onClick={() => increment(product._id)}>+</Btn>
          <Count>{product.totalPrice || product.price} uah</Count>
        </Box>
      </Item>
    </>
  );
};

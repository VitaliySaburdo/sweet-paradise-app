import React from "react";
import { Img, Wrapper, Title, Text, Params } from "../Product/Products.styled";
import { Button } from "../Button/Button";


interface NoveltiesItem {
  product: {
    _id: string;
    name: string;
    price: number;
    weight: string;
    category: string;
    favorite: boolean;
    img: string;
    ingredients: string;
    owner: string;
  };
}

export const Product: React.FC<NoveltiesItem> = ({ product }) => {
  return (
    <>
      <Wrapper>
              <Img src={"https://sweet-paradise-api.onrender.com/static/" + product.img} alt={product.name}/>
              <Title>{product.name}</Title>
              <Text>{product.ingredients}</Text>
              <Params>{product.price} uah /{product.weight} gr</Params>
              <Button width="200px">on basket</Button>
      </Wrapper>
    </>
  );
};

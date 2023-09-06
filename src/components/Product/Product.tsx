import React from "react";
import { useState } from "react";
import { Img, Wrapper, Title, Text, Params } from "../Product/Products.styled";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { ProductProps } from "../App/App.types";
import { CartList } from "../CartList/CartList";

export const Product: React.FC<ProductProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<ProductProps[]>([]);

  const handleButtonClick = ({product}: any) => {
    setIsModalOpen(true);
    setCart([...cart, product]);
  };

  console.log(cart);

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <Button width="200px" onClick={()=>handleButtonClick({product})}>
          to buy
        </Button>
      </Wrapper>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <CartList cart={cart} />
        </Modal>
      )}
    </>
  );
};

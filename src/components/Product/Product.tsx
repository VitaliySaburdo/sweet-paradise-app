import React from "react";
import { useState } from "react";
import { Img, Wrapper, Title, Text, Params } from "../Product/Products.styled";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { ProductProps } from "../App/App.types";
import { CartItem } from "../CartItem/CartItem";

export const Product: React.FC<ProductProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

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
        <Button width="200px" onClick={openModal}>
          to buy
        </Button>
      </Wrapper>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <CartItem product={ product } />
        </Modal>
      )}
    </>
  );
};

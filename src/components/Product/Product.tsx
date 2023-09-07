import React, { useState } from "react";
import { Img, Wrapper, Title, Text, Params } from "../Product/Products.styled";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
// import { CartList } from "../CartList/CartList";
import { NoveltiesItem } from "../Novelties/Novelties";

interface ProductProps {
  product: NoveltiesItem;
  onAdd: (novelty: NoveltiesItem) => void;
}

export const Product: React.FC<ProductProps> = ({ product, onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
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
        <Button width="200px" onClick={() => onAdd(product)}>
          Add to Cart
        </Button>
      </Wrapper>
      {isModalOpen && (
        <Modal onClick={closeModal}>{/* <CartList cart={cart} /> */}</Modal>
      )}
    </>
  );
};

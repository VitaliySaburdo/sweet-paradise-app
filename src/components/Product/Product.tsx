import React, { useState } from "react";
import { Img, Wrapper, Title, Text, Params } from "../Product/Products.styled";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { CartList } from "../CartList/CartList";
import { NoveltiesItem } from "../Novelties/Novelties";

interface ProductProps {
  product: NoveltiesItem; // Update the type to match NoveltiesItem
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<NoveltiesItem[]>([]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    if (!cart.find((item) => item._id === product._id)) {
      setCart([...cart, product]);
    } else {
      console.log('The product is already in the cart');
    }
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
        <Button width="200px" onClick={handleButtonClick}>
          Add to Cart
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
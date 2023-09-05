import React from "react";
import { useState } from "react";
import {
  Img,
  Wrapper,
  Title,
  Text,
  Params,
  Box,
  Picture,
  Input,
  Count,
} from "../Product/Products.styled";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <h2>{product.name}</h2>
          <div>
            <Box>
              <Picture
                src={
                  "https://sweet-paradise-api.onrender.com/static/" +
                  product.img
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
                          <Button
              margin="20px auto 0 auto"
              height="50px"
              width="140px"
              type="submit"
            >
              add to cart
            </Button>
            </Box>
          </div>
        </Modal>
      )}
    </>
  );
};

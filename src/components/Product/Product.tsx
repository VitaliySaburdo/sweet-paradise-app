import React from "react";
import { Img } from "../Novelties/Novelties.styled";


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
      <li key={product._id}>
              <Img src={"https://sweet-paradise-api.onrender.com/static/" + product.img} alt={product.name}/>
              <h3>{product.name}</h3>
              <p>{product.ingredients}</p>
              <p>{product.price} uah /{product.weight} gr</p>
              <button type="button">on basket</button>
      </li>
    </>
  );
};

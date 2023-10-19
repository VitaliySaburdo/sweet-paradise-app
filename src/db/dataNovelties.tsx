import Panna_cotta from "../images/Novelties/Panna_cotta.png";
import Apple_tart from "../images/Novelties/Apple_tart.png";
import Tiramisu from "../images/Novelties/Tiramisu.png";
import { ProductProps } from "../App/App.types";

export const Novelties: ProductProps[] = [
  {
    _id: "52e02dd5-0d8b-4492-b187-c875aa66a0c0",
    name: "Panna cotta",
    price: 70,
    weight: 200,
    category: "novelties",
    favorite: false,
    img: Panna_cotta,
    ingredients:
      "Fresh eggs, yolk, sugar, mascarpone, Savoyardi cookies, espresso, cognac, cocoa, salt",
    owner: 'Vitaliy',
  },
  {
    _id: "04702f87-d4d3-451c-9107-c6bd8d8cf3dc",
    name: "Tiramisu",
    price: 80,
    weight: 200,
    category: "novelties",
    favorite: false,
    img: Tiramisu,
    ingredients:
      "Fresh eggs, yolk, sugar, mascarpone, Savoyardi cookies, espresso, cognac, cocoa, salt",
    owner: 'Vitaliy',
  },
  {
    _id: "33654b31-b4a2-4e40-abe4-ea213499f900",
    name: "Apple tart",
    price: 80,
    weight: 200,
    category: "novelties",
    favorite: false,
    img: Apple_tart,
    ingredients:
      "Fresh eggs, yolk, sugar, mascarpone, Savoyardi cookies, espresso, cognac, cocoa, salt",
    owner: 'Vitaliy',
  },
];

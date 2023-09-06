export interface ProductProps {
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
    quantity: null;
  };
}
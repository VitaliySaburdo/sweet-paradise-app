export interface ProductProps {
  _id: string;
  name: string;
  price: number;
  weight: number;
  category: string;
  favorite: boolean;
  img: File | null;
  ingredients: string;
  owner: string;
}

export interface OrderProps extends ProductProps {
  quantity: number;
  totalPrice: number;
}

export interface OrderHistoryProps {
  _id: string;
  name: string;
  price: number;
  weight: number;
  category: string;
  favorite: boolean;
  img: string;
  ingredients: string;
  owner: string;
  quantity: number;
  totalPrice: number;
}

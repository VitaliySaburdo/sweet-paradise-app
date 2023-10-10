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
    quantity: number;
    totalPrice: number;
}
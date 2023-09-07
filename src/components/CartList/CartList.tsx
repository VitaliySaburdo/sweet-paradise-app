import { ProductProps } from "../App/App.types";
import { CartItem } from "../CartItem/CartItem";
import {Container} from './CartList.styled';

export const CartList: React.FC<{
  orders: ProductProps[];
  deleteOrder: (orders: ProductProps) => void;
}> = ({ orders, deleteOrder }) => {
  return (
    <>
      <Container>
        {orders.map((order) => (
          <CartItem key={order._id} product={order} deleteOrder={deleteOrder} />
        ))}
      </Container>
    </>
  );
};

import { ProductProps } from "../App/App.types";
import { CartItem } from "../CartItem/CartItem";
import { Container } from "./CartList.styled";

export const CartList: React.FC<{
  orders: ProductProps[];
  deleteOrder: (orders: ProductProps) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
}> = ({ orders, deleteOrder, increment, decrement }) => {
  return (
    <>
      <Container>
        {orders.map((order) => (
          <CartItem
            key={order._id}
            product={order}
            deleteOrder={deleteOrder}
            increment={increment}
            decrement={decrement}
            // changeValue={changeValue}
          />
        ))}
      </Container>
    </>
  );
};

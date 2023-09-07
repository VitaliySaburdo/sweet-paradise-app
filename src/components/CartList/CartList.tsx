import { ProductProps } from "../App/App.types";
import { CartItem } from "../CartItem/CartItem";

export const CartList: React.FC<{
  orders: ProductProps[];
  deleteOrder: (orders: ProductProps) => void;
}> = ({ orders, deleteOrder }) => {
  return (
    <>
      <ul>
        {orders.map((order) => (
          <CartItem key={order._id} product={order} deleteOrder={deleteOrder} />
        ))}
      </ul>
    </>
  );
};

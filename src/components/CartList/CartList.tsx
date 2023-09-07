import { ProductProps } from "../App/App.types";
import { CartItem } from "../CartItem/CartItem";

export const CartList: React.FC<{ orders: ProductProps[] }> = ({ orders }) => {
  return (
    <>
      <ul>
        {orders.map((order) => (
          <CartItem key={order._id} product={order} />
        ))}
      </ul>
    </>
  );
};

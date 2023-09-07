import { ProductProps } from "../App/App.types";
import { CartItem } from "../CartItem/CartItem";

export const CartList: React.FC<{ cart: ProductProps[] }> = ({ cart }) => {
  return (
    <>
      <ul>
        {cart.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </ul>
    </>
  );
};
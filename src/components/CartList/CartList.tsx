import { ProductProps } from "../App/App.types";

export const CartList: React.FC<{ cart: ProductProps[] }> = ({ cart }) => {
  return (
    <>
      {/* {cart.map((product) => (
        <CartItem key={product._id} product={product} />
      ))} */}
    </>
  );
};

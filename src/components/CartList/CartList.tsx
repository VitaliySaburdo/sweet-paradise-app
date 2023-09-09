import { ProductProps } from "../App/App.types";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import { Container, CartListHeader, StyledWrapper, TotalPrice} from "./CartList.styled";

export const CartList: React.FC<{
  orders: ProductProps[];
  deleteOrder: (orders: ProductProps) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  changeValue: (id: string, value: number) => void;
}> = ({ orders, deleteOrder, increment, decrement, changeValue }) => {
  const totalPriceAllOrders = orders.reduce(
    (totalPrice, order) => totalPrice + (order.totalPrice || order.price),
    0
  );
  const totalQuantityAllOrders = orders.reduce(
    (totalPrice, order) => totalPrice + (order.quantity || 1),
    0
  );

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
            changeValue={changeValue}
          />
        ))}
      </Container>
      <CartListHeader>
        <h2>Total prise</h2>
        <StyledWrapper>
          <TotalPrice>{totalPriceAllOrders} uah</TotalPrice>
          <Button width={'200px'}>Checkout</Button>
        </StyledWrapper>
      </CartListHeader>
    </>
  );
};

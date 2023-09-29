import { ProductProps } from "../../App/App.types";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import {
  Container,
  CartListHeader,
  StyledWrapper,
  TotalPrice,
} from "./CartList.styled";

export const CartList: React.FC<{
  orders: ProductProps[];
  deleteOrder: (orders: ProductProps) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  changeValue: (id: string, value: number) => void;
  closeCartModal: () => void;
}> = ({ orders, deleteOrder, increment, decrement, changeValue, closeCartModal }) => {

  const totalPriceAllOrders = orders.reduce(
    (totalPrice, order) => totalPrice + order.totalPrice,
    0
  );

  const handleOnClick = () => {
    console.log(orders);
    closeCartModal();
  };

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
          <Button onClick={handleOnClick} width={"200px"}>
            Checkout
          </Button>
        </StyledWrapper>
      </CartListHeader>
    </>
  );
};

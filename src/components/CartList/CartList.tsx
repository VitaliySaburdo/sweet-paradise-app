import { OrderProps } from "../../App/App.types";
import { notify } from "../../helpers/Notification";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import {
  Container,
  CartListHeader,
  StyledWrapper,
  TotalPrice,
} from "./CartList.styled";


export const CartList: React.FC<{
  orders: OrderProps[];
  closeCartModal: () => void;
}> = ({ orders, closeCartModal }) => {

  const totalPriceAllOrders = orders.reduce(
    (totalPrice, order) => totalPrice + order.totalPrice,
    0
  );

  const handleOnClick = () => {
    console.log(orders);
    closeCartModal();
    notify({
          message: `Please register`,
          type: "warning",
        });
  };

  return (
    <>
      <Container>
        {orders.map((order) => (
          <CartItem
            key={order._id}
            product={order}
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

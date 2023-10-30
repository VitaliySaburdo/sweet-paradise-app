import { OrderProps } from "../../App/App.types";
import { notify } from "../../helpers/Notification";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { selectUser } from "../../redux/auth/authSelectors";
import { createOrder } from "../../redux/orders/ordersOperation";
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
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const totalPriceAllOrders = orders.reduce(
    (totalPrice, order) => totalPrice + order.totalPrice,
    0
  );

  const handleOnClick = () => {
    closeCartModal();
    if (currentUser) {
      dispatch(createOrder({ owner: currentUser._id, items: orders }));
      notify({
        message: `Hello ${currentUser.name} your order success`,
        type: "success",
      });
    } else {
      notify({
        message: `Please register`,
        type: "warning",
      });
    }
  };

  return (
    <>
      <Container>
        {orders.map((order) => (
          <CartItem key={order._id} product={order} />
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

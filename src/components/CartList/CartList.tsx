import { useState } from "react";
import { OrderProps } from "../../App/App.types";
import { notify } from "../../helpers/Notification";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { selectUser } from "../../redux/auth/authSelectors";
import { createOrder } from "../../services/apiService";
import { resetOrders } from "../../redux/orders/ordersSlice";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import {
  Container,
  CartListHeader,
  StyledWrapper,
  TotalPrice,
} from "./CartList.styled";
import { Modal } from "../Modal/Modal";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const CartList: React.FC<{
  orders: OrderProps[];
  closeCartModal: () => void;
  openLoginModal: () => void;
}> = ({ orders, closeCartModal, openLoginModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const totalPriceAllOrders = orders.reduce(
    (totalPrice, order) => totalPrice + order.totalPrice,
    0
  );

  const handleOnClick = async () => {
    closeCartModal();
    if (currentUser._id) {
      try {
        await createOrder({
          owner: currentUser._id,
          items: orders,
          totalPrice: totalPriceAllOrders,
        });
      } catch (error) {
        console.log(error);
      }
      notify({
        message: `Hello ${currentUser.name} your order success`,
        type: "success",
      });
      dispatch(resetOrders());
    } else {
      notify({
        message: `Please login to shop.`,
        type: "warning",
      });
      setTimeout(() => {
        openLoginModal();
      }, 1500);
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
      {isOpen && (
        <Modal
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <RegisterForm closeModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
};

import { useAppDispatch } from "../../hooks/reduxHook";
import { logOut } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { OrdersHistoryList } from "../../components/OrdersHistoryList/OrdersHistoryList";
import { StyledSection, StyledButton } from "./OrderHistory.styled";
import { OrderHistoryProps } from "../../App/App.types";

interface orderHistoryProps {
  ordersHistory: {
    _id: string;
    items: OrderHistoryProps[];
    orderTime: string;
  }[];
}

export const OrderHistory: React.FC<orderHistoryProps> = ({
  ordersHistory,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <StyledSection>
        <Container>
          {ordersHistory.length ? (
            <OrdersHistoryList ordersHistory={ordersHistory} />
          ) : (
            <p>You don`t have orders</p>
          )}
          <StyledButton
            onClick={() => {
              dispatch(logOut());
              navigate("/");
            }}
          >
            Logout
          </StyledButton>
        </Container>
      </StyledSection>
    </>
  );
};

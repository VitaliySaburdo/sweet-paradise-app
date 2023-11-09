import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { logOut } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { OrdersHistoryList } from "../../components/OrdersHistoryList/OrdersHistoryList";
import {
  StyledSection,
  StyledButton,
  StyledContainer,
  MainTitle,
  Title,
} from "./OrderHistory.styled";
import { selectOrderHistory } from "../../redux/orderHistory/orderHistorySelector";

export const OrderHistory: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const ordersHistory = useAppSelector(selectOrderHistory);

  return (
    <>
      <StyledSection>
        <Container>
          <MainTitle>Purchase history</MainTitle>
          {ordersHistory.length ? (
            <OrdersHistoryList ordersHistory={ordersHistory} />
          ) : (
            <StyledContainer>
              <Title>You don`t have orders</Title>
            </StyledContainer>
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

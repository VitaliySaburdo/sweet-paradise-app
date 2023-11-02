import { useAppDispatch } from "../../hooks/reduxHook";
import { logOut } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { OrdersHistoryList } from "../../components/OrdersHistoryList/OrdersHistoryList";
import { OrderHistoryProps } from "../../App/App.types";
import {
  StyledSection,
  StyledButton,
  StyledContainer,
  MainTitle, 
  Title,
} from "./OrderHistory.styled";

interface orderHistoryProps {
  ordersHistory: {
    _id: string;
    items: OrderHistoryProps[];
    orderTime: string;
    totalPrice: number;
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
          <MainTitle>User history</MainTitle>
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

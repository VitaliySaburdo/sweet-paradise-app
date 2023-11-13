import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { logOut } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { OrdersHistoryList } from "../../components/OrdersHistoryList/OrdersHistoryList";
import { StyledSection, StyledButton, MainTitle } from "./OrderHistory.styled";
import {
  selectIsLoading,
  selectOrderHistory,
} from "../../redux/orderHistory/orderHistorySelector";
import { Loader } from "../../components/Loader/Loader";

interface OrderHistoryProps {
  nextPage: () => void;
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({nextPage}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const ordersHistory = useAppSelector(selectOrderHistory);

  const isLoading = useAppSelector(selectIsLoading);

  return (
    <>
      <StyledSection>
        <Container>
          <MainTitle>Purchase history</MainTitle>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <OrdersHistoryList ordersHistory={ordersHistory} />
              <button type="button" onClick={()=>nextPage()}>Load more</button>
            </>
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

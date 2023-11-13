import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { logOut } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { OrdersHistoryList } from "../../components/OrdersHistoryList/OrdersHistoryList";
import {
  StyledSection,
  StyledButton,
  MainTitle,
  LoadMoreButton,
} from "./OrderHistory.styled";
import {
  selectIsLoading,
  selectOrderHistory,
  selectTotalPages,
} from "../../redux/orderHistory/orderHistorySelector";
import { Loader } from "../../components/Loader/Loader";

interface OrderHistoryProps {
  nextPage: () => void;
  page: number;
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({
  nextPage,
  page,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const ordersHistory = useAppSelector(selectOrderHistory);

  const isLoading = useAppSelector(selectIsLoading);
  const totalPages = useAppSelector(selectTotalPages);

  return (
    <>
      <StyledSection>
        <Container>
          <MainTitle>Purchase history</MainTitle>
          {isLoading ? (
            <Loader />
          ) : (
            <OrdersHistoryList ordersHistory={ordersHistory} />
          )}
          {totalPages > page && (
            <LoadMoreButton type="button" onClick={() => nextPage()}>
              {isLoading ? "Downloading..." : "Load more"}
            </LoadMoreButton>
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

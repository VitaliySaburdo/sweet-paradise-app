import { useAppDispatch } from "../../hooks/reduxHook";
import { logOut } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { OrdersHistoryList } from "../../components/OrdersHistoryList/OrdersHistoryList";
import { StyledSection } from "./OrderHistory.styled";
import { OrderProps } from "../../App/App.types";

interface orderHistoryProps {
  ordersHistory: {
    _id: string;
    items: OrderProps[];
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
          <OrdersHistoryList ordersHistory={ordersHistory} />
          <Button
            onClick={() => {
              dispatch(logOut());
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Container>
      </StyledSection>
    </>
  );
};

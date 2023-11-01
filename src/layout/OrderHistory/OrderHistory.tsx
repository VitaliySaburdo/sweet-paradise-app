import { Container } from "../../components/Container/Container";
import { OrdersHistoryList } from "../../components/OrdersHistoryList/OrdersHistoryList";
import { StyledSection } from './OrderHistory.styled';
import { OrderProps } from "../../App/App.types";

interface orderHistoryProps {
      ordersHistory: {
    _id: string;
    items: OrderProps[];
    orderTime: string;
  }[];
}

export const OrderHistory: React.FC <orderHistoryProps> = ({ordersHistory}) => {
  return (
    <>
      <StyledSection>
        <Container>
          <OrdersHistoryList ordersHistory={ordersHistory} />
        </Container>
      </StyledSection>
    </>
  );
};

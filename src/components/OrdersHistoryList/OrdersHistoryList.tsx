import { OrderHistoryProps } from "../../App/App.types";
import { OrderHistoryItem } from "../OrdersHistoryItem/OrdersHistoryItem";
import { MainTitle, MainWrapper, Wrapper } from "./OrdersHistoryList.styled";

interface orderHistoryProps {
  ordersHistory: {
    _id: string;
    items: OrderHistoryProps[];
    orderTime: string;
    totalPrice: number;
  }[];
}

export const OrdersHistoryList: React.FC<orderHistoryProps> = ({
  ordersHistory,
}) => {
  return (
    <>
      <MainTitle>User history</MainTitle>
      <MainWrapper>
        {ordersHistory.map((order, index) => (
          <Wrapper key={order._id}>
            <p>Order № {index + 1}</p>
            <div style={{ display: "flex" }}>
              {order.items.map((item) => (
                <OrderHistoryItem item={item} />
              ))}
            </div>
          </Wrapper>
        ))}
      </MainWrapper>
    </>
  );
};

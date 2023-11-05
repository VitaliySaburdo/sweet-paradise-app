import { OrderHistoryProps } from "../../App/App.types";
import { OrderHistoryItem } from "../OrdersHistoryItem/OrdersHistoryItem";
import { BlockWrapper, MainWrapper, Wrapper } from "./OrdersHistoryList.styled";

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
  const ConvertTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  const ordersHistoryByDate = ordersHistory.sort(
    (a, b) => new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime()
  );

  return (
    <>
      <BlockWrapper>
        <MainWrapper>
          {ordersHistoryByDate.map((order, index) => (
            <Wrapper key={order._id}>
              <p>
                Order № {index + 1} dated{" "}
                <span>{ConvertTime(order.orderTime)}</span>
              </p>
              <p>
                Total price order <span>{order.totalPrice}</span>
              </p>
              <div style={{ display: "flex" }}>
                {order.items.map((item, itemIndex) => (
                  <OrderHistoryItem key={itemIndex} item={item} />
                ))}
              </div>
            </Wrapper>
          ))}
        </MainWrapper>
      </BlockWrapper>
    </>
  );
};

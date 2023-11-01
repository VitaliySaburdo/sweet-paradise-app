import { MainTitle } from "./OrdersHistoryList.styled";
import { OrderProps } from "../../App/App.types";

interface orderHistoryProps {
  ordersHistory: {
    _id: string;
    items: OrderProps[];
    orderTime: string;
  }[];
}

export const OrdersHistoryList: React.FC<orderHistoryProps> = ({
  ordersHistory,
}) => {
  return (
    <>
      <MainTitle>User history</MainTitle>
      <div>
        {ordersHistory.map((order, index) => (
          <ul key={order._id}>Order {index + 1}
            {order.items.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </ul>
        ))}
      </div>


    </>
  );
};

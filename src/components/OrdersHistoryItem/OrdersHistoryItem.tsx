import { OrderHistoryProps } from "../../App/App.types";

interface OrderHistoryItemProps {
  item: OrderHistoryProps;
}

export const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ item }) => {
  return (
    <>
      <img
        src={"https://sweet-paradise-api.onrender.com/static/" + item.img}
        alt={item.name}
        width={40}
        height={10}
      />
    </>
  );
};

import { OrderHistoryProps } from "../../App/App.types";
import {IMG} from './OrderHistoryItem.styled'

interface OrderHistoryItemProps {
  item: OrderHistoryProps;
}

export const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ item }) => {
  return (
    <>
      <IMG
        src={"https://sweet-paradise-api.onrender.com/static/" + item.img}
        alt={item.name}
        width={40}
      />
    </>
  );
};

import { OrderHistoryProps } from "../../App/App.types";
import { OrderHistoryItem } from "../OrdersHistoryItem/OrdersHistoryItem";
import {
  BlockWrapper,
  MainWrapper,
  Wrapper,
  Box,
  ImageWrapper,
  Text,
  StyledBox,
  OrderText,
  Dots,
} from "./OrdersHistoryList.styled";

interface orderHistoryProps {
  ordersHistory: {
    _id: string;
    items: OrderHistoryProps[];
    orderTime: string;
    totalPrice: number;
    orderNumber: number;
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

  return (
    <>
      <BlockWrapper>
        <MainWrapper>
          {ordersHistory.map((order) => (
            <Wrapper key={order._id}>
              <Box>
                <OrderText>Order № {order.orderNumber}</OrderText>
                <p> dated {ConvertTime(order.orderTime)}</p>
              </Box>
              <StyledBox>
                <Text>Total price order {order.totalPrice} uah</Text>
                <ImageWrapper>
                  {order.items.slice(0, 6).map((item, itemIndex) => (
                    <OrderHistoryItem key={itemIndex} item={item} />
                  ))}
                  {order.items.length > 7 && <Dots>...</Dots>}
                </ImageWrapper>
              </StyledBox>
              <button style={{display: "block", marginLeft: "auto"}}>details</button>
            </Wrapper>
          ))}
        </MainWrapper>
      </BlockWrapper>
    </>
  );
};

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
  DataText,
  OrderText,
  Dots,
  StyledContainer,
  Title,
} from "./OrdersHistoryList.styled";

interface orderHistoryItemProps {
  _id: string;
  items: OrderHistoryProps[];
  orderNumber: number;
  orderTime: string;
  owner: string;
  totalPrice: number;
}
interface OrderHistoryListProps {
  ordersHistory: orderHistoryItemProps[];
}

export const OrdersHistoryList: React.FC<OrderHistoryListProps> = ({
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
        {ordersHistory.length ? (
          <MainWrapper>
            {ordersHistory.map((order) => (
              <Wrapper key={order._id}>
                <Box>
                  <OrderText>Order № {order.orderNumber}</OrderText>
                  <DataText> dated {ConvertTime(order.orderTime)}</DataText>
                </Box>
                <StyledBox>
                  <Text>Total price {order.totalPrice} uah</Text>
                  <ImageWrapper>
                    {order.items.slice(0, 6).map((item, itemIndex) => (
                      <OrderHistoryItem key={itemIndex} item={item} />
                    ))}
                    {order.items.length > 7 && <Dots>...</Dots>}
                  </ImageWrapper>
                </StyledBox>
              </Wrapper>
            ))}
          </MainWrapper>
        ) : (
          <MainWrapper>
            <StyledContainer>
              <Title>You don`t have orders</Title>
            </StyledContainer>
          </MainWrapper>
        )}
      </BlockWrapper>
    </>
  );
};

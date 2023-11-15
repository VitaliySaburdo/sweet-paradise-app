import { useState } from "react";
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
  ShowMoreBtn,
  Icon,
} from "./OrdersHistoryList.styled";
import icons from "../../images/sprite.svg";

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
  const [showDetails, setShowDetails] = useState(false);

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
                {showDetails && (
                  <>
                    {" "}
                    <StyledBox>
                      <Text>Total price {order.totalPrice} uah</Text>
                      <ImageWrapper>
                        {order.items.slice(0, 6).map((item, itemIndex) => (
                          <OrderHistoryItem key={itemIndex} item={item} />
                        ))}
                        {order.items.length > 7 && <Dots>...</Dots>}
                      </ImageWrapper>
                    </StyledBox>
                  </>
                )}
                <ShowMoreBtn onClick={
                  () => setShowDetails(!showDetails)
                }>
                  <Icon rotate={showDetails}  width={20} height={20}>
                    <use href={icons + "#icon-circle-up"}></use>
                  </Icon>
                </ShowMoreBtn>
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

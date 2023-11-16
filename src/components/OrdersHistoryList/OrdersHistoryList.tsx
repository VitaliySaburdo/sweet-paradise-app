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
  OrderWrapper,
  OrderItem,
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
  const [expandedOrders, setExpandedOrders] = useState<{
    [key: string]: boolean;
  }>(ordersHistory.reduce((acc, order) => ({ ...acc, [order._id]: true }), {}));

  const ConvertTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  const handleShowDetails = (id: string) => {
    setExpandedOrders((prevExpandedOrders) => ({
      ...prevExpandedOrders,
      [id]: !prevExpandedOrders[id],
    }));
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
                {expandedOrders[order._id] ? (
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
                ) : (
                    <>
                      <div style={{display: "flex", flexDirection: "column", marginRight: "150px"}}>
                    <OrderWrapper>
                      {order.items.map((item) => (
                        <OrderItem>
                          <img
                            src={
                              "https://sweet-paradise-api.onrender.com/static/" +
                              item.img
                            }
                            alt={item.name}
                            width={40}
                          />
                          <p style={{ minWidth: "250px" }}>{item.name}</p>
                          <p style={{ minWidth: "60px" }}>{item.quantity}</p>
                          <p style={{ minWidth: "60px" }}>{item.price} uah</p>
                          <p style={{ minWidth: "60px" }}>{item.totalPrice} uah</p>
                        </OrderItem>
                      ))}
                    </OrderWrapper>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                      <p>-----------------------------------------------------------------------------------------</p>
                      <p>Total prise {order.totalPrice} uah</p>
                        </div>
                        </div>
                  </>
                )}
                <ShowMoreBtn
                  onClick={() => {
                    handleShowDetails(order._id);
                  }}
                >
                  <Icon
                    rotate={expandedOrders[order._id]}
                    width={20}
                    height={20}
                  >
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

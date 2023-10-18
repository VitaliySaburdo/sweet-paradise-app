import { deleteOrder } from "../../redux/orders/ordersSlice";
import { increment } from "../../redux/orders/ordersSlice";
import { decrement } from "../../redux/orders/ordersSlice";
import { changeValue } from "../../redux/orders/ordersSlice";
import {
  StyledText,
  Item,
  Box,
  Picture,
  Input,
  Count,
  Btn,
  CloseBtn,
} from "./CartItem.styled";
import { OrderProps } from "../../App/App.types";
import cross from "../../images/Modal/cross.png";
import { useAppDispatch } from "../../hooks/reduxHook";

interface CartItemProps {
  product: OrderProps;
}

export const CartItem: React.FC<CartItemProps> = ({
  product,
}) => {
  const dispatch = useAppDispatch();

  const onDelete = (id: string) => {
    dispatch(deleteOrder(id));
  };

  const onIncrement = (id: string) => {
    dispatch(increment(id));
  };
    const onDecrement = (id: string) => {
    dispatch(decrement(id));
  };
    const onChangeValue = (id: string, value: number ) => {
    dispatch(changeValue({id, value}));
  };

  return (
    <>
      <Item>
        <Box style={{ justifyContent: "space-between", marginRight: "10px" }}>
          <StyledText>{product.name}</StyledText>
          <CloseBtn onClick={() => onDelete(product._id)}>
            <img src={cross} alt="cross" width={16} />
          </CloseBtn>
        </Box>
        <Box>
          <Picture
            src={
              "https://sweet-paradise-api.onrender.com/static/" + product.img
            }
            alt={product.name}
          />
          <Btn onClick={() => onDecrement(product._id)}>-</Btn>
          <Input
            type="text"
            value={product.quantity || 1}
            min="1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChangeValue(product._id, parseInt(e.target.value, 10));
            }}
          />
          <Btn onClick={() => onIncrement(product._id)}>+</Btn>
          <Count>{product.totalPrice || product.price} uah</Count>
        </Box>
      </Item>
    </>
  );
};

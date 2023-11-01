import { useAppDispatch } from "../../hooks/reduxHook";
import { logOut } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <>
      <MainTitle>User history</MainTitle>
      <ul>
        {ordersHistory.map((order) => (
          <li key={order._id}>
            {order.items.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </li>
        ))}
      </ul>

      <Button
        onClick={() => {
          dispatch(logOut());
          navigate("/");
        }}
      >
        Logout
      </Button>
    </>
  );
};

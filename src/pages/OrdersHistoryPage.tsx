import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/reduxHook";
import { getAllOrders } from "../services/apiService";
import { selectUserId } from "../redux/auth/authSelectors";
import { OrderHistory } from "../layout/OrderHistory/OrderHistory";

const OrdersHistoryPage = () => {
  const [ordersHistory, setOrdersHistory] = useState<any>([]);

  const currentUser = useAppSelector(selectUserId);

  useEffect(() => {
    const getOrdersHistory = async () => {
      try {
        if (currentUser) {
          const data = await getAllOrders(currentUser);
          setOrdersHistory(data);
        }
      } catch (error) {}
    };
    getOrdersHistory();
  }, [currentUser]);

  return (
    <>
      <OrderHistory ordersHistory={ordersHistory} />
    </>
  );
};

export default OrdersHistoryPage;

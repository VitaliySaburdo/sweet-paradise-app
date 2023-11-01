import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/reduxHook";
import { getAllOrders } from "../services/apiService";
import { selectUserId } from "../redux/auth/authSelectors";
import { OrderHistory } from "../layout/OrderHistory/OrderHistory";

export const OrdersHistoryPage = () => {
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

  console.log(ordersHistory)

  return (
    <>
      <OrderHistory ordersHistory={ ordersHistory } />
    </>
  );
};

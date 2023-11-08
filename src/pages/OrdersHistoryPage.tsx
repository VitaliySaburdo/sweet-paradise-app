import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { selectUserId } from "../redux/auth/authSelectors";
import { OrderHistory } from "../layout/OrderHistory/OrderHistory";
import { getAllOrders } from "../redux/orderHistory/orderHistoryOperation";

const OrdersHistoryPage = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectUserId);

  useEffect(() => {
    if (currentUser) dispatch(getAllOrders(currentUser));
  }, [dispatch, currentUser]);

  return (
    <>
      <OrderHistory />
    </>
  );
};

export default OrdersHistoryPage;

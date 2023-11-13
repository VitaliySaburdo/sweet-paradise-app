import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { selectUserId } from "../redux/auth/authSelectors";
import { OrderHistory } from "../layout/OrderHistory/OrderHistory";
import { getAllOrders } from "../redux/orderHistory/orderHistoryOperation";

const OrdersHistoryPage = () => {
  const [limit, setLimit] = useState(0);
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectUserId);

  const nextPage = () => {
    setLimit((prevState) => prevState + 6);
  };

  useEffect(() => {
    if (currentUser) dispatch(getAllOrders({ ownerId: currentUser, limit }));
  }, [dispatch, currentUser, limit]);

  return (
    <>
      <OrderHistory nextPage={nextPage} />
    </>
  );
};

export default OrdersHistoryPage;

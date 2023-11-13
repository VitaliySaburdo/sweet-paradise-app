import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { selectUserId } from "../redux/auth/authSelectors";
import { OrderHistory } from "../layout/OrderHistory/OrderHistory";
import { getAllOrders } from "../redux/orderHistory/orderHistoryOperation";

const OrdersHistoryPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectUserId);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (currentUser) dispatch(getAllOrders({ ownerId: currentUser, page }));
  }, [dispatch, currentUser, page]);

  return (
    <>
      <OrderHistory nextPage={nextPage} page={page} />
    </>
  );
};

export default OrdersHistoryPage;

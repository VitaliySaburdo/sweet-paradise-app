import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { logOut } from "../redux/auth/authOperations";
import { getAllOrders } from "../redux/ordersHistory/ordersOperation";
import { selectUser } from "../redux/auth/authSelectors";
// import { selectorHistory } from "../redux/ordersHistory/ordersHistorySelectors";

export const OrdersHistory = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectUser);
  // const ordersHistory = useAppSelector(selectorHistory);

  useEffect(() => {
    dispatch(getAllOrders({ owner: currentUser._id }));
  }, [dispatch, currentUser._id]);

  return (
    <>
      <Section>
        <Container>
          <h2>User history</h2>
        </Container>
        <Button
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          Logout
        </Button>
      </Section>
    </>
  );
};

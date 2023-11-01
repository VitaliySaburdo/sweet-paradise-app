import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { logOut } from "../redux/auth/authOperations";
import { getAllOrders } from "../redux/orders/ordersOperation";
import { selectUserId } from "../redux/auth/authSelectors";
import { selectOrdersHistory } from "../redux/orders/ordersSelector";

export const OrdersHistory = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectUserId);
  const ordersHistory = useAppSelector(selectOrdersHistory);


console.log(ordersHistory)

  useEffect(() => {
    if (currentUser) {
     dispatch(getAllOrders( currentUser)); 
    }
  }, [dispatch, currentUser]);

  return (
    <>
      <Section>
        <Container>
          <h2>User history</h2>
                  <Button
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          Logout
        </Button>
        </Container>
      </Section>
    </>
  );
};

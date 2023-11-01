import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { logOut } from "../redux/auth/authOperations";
import { getAllOrders } from "../services/apiService";
import { selectUserId } from "../redux/auth/authSelectors";

export const OrdersHistory = () => {
  const [ordersHistory, setOrdersHistory] = useState([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectUserId);

  console.log(ordersHistory);

  useEffect(() => {
    const getOrdersHistory = async () => {
      try {
        if (currentUser) {
          const data = await getAllOrders(currentUser);
          setOrdersHistory(data)
        }
      } catch (error) {}
    };
    getOrdersHistory();
  }, [currentUser]);

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

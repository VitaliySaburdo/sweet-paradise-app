import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { useAppDispatch } from "../hooks/reduxHook";
import { logOut } from "../redux/auth/authOperations";

export const OrdersHistory = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ProductProps } from "../App/App.types";

// import { Loader } from 'components/Loader/Loader';
// import PawLoader from '../../images/Loader.png';

interface OrderProps {
  orders: ProductProps[];
  deleteOrder: (orders: ProductProps) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
}

export const SharedLayout: React.FC<OrderProps> = ({
  orders,
  deleteOrder,
  decrement,
  increment,
}) => {
  return (
    <>
      <Header
        orders={orders}
        deleteOrder={deleteOrder}
        increment={increment}
        decrement={decrement}
      />
      <Suspense fallback={"Loading..."}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

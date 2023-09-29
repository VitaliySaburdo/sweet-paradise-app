import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import { ProductProps } from "../../app/App.types";

// import { Loader } from 'components/Loader/Loader';
// import PawLoader from '../../images/Loader.png';

interface OrderProps {
  orders: ProductProps[];
  deleteOrder: (orders: ProductProps) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  changeValue: (id:string, value: number) => void;
}

export const SharedLayout: React.FC<OrderProps> = ({
  orders,
  deleteOrder,
  decrement,
  increment,
  changeValue,
}) => {
  return (
    <>
      <Header
        orders={orders}
        deleteOrder={deleteOrder}
        increment={increment}
        decrement={decrement}
        changeValue={changeValue}
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

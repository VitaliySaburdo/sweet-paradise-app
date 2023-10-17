import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import { ProductProps, OrderProps } from "../../App/App.types";

interface SharedLayoutProps {
  orders: OrderProps[];
  deleteOrder: (orders: ProductProps) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  changeValue: (id: string, value: number) => void;
  addProductByCategory: (id: string) => void;
}

export const SharedLayout: React.FC<SharedLayoutProps> = ({
  orders,
  deleteOrder,
  decrement,
  increment,
  changeValue,
  addProductByCategory,
}) => {
  return (
    <>
      <Header
        orders={orders}
        deleteOrder={deleteOrder}
        increment={increment}
        decrement={decrement}
        changeValue={changeValue}
        addProductByCategory={addProductByCategory}
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

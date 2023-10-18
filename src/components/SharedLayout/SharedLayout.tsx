import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";

interface SharedLayoutProps {
  increment: (id: string) => void;
  decrement: (id: string) => void;
  changeValue: (id: string, value: number) => void;
  addProductByCategory: (id: string) => void;
}

export const SharedLayout: React.FC<SharedLayoutProps> = ({
  decrement,
  increment,
  changeValue,
  addProductByCategory,
}) => {
  return (
    <>
      <Header
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

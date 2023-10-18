import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";

interface SharedLayoutProps {
  addProductByCategory: (id: string) => void;
}

export const SharedLayout: React.FC<SharedLayoutProps> = ({
  addProductByCategory,
}) => {
  return (
    <>
      <Header
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

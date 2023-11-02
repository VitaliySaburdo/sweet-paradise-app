import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import { StyledMain } from "./ShareLayout.styled";

interface SharedLayoutProps {
  addProductByCategory: (id: string) => void;
}

export const SharedLayout: React.FC<SharedLayoutProps> = ({
  addProductByCategory,
}) => {
  return (
    <>
      <Header addProductByCategory={addProductByCategory} />
      <Suspense fallback={"Loading..."}>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </Suspense>
      <Footer />
    </>
  );
};

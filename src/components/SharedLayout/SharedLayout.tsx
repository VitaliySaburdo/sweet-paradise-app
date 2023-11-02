import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import { StyledMain } from "./ShareLayout.styled";

export const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={"Loading..."}>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </Suspense>
      <Footer />
    </>
  );
};

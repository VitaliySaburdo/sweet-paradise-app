import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/Header/Header";
import { Footer } from "../../layout/Footer/Footer";
import { Loader } from "../Loader/Loader";

export const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

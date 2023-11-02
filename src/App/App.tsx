import { useAppDispatch } from "../hooks/reduxHook";
import { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { refreshUser } from "../redux/auth/authOperations";
import { StyleSheetManager } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { SharedLayout } from "../components/SharedLayout/SharedLayout";
import { PrivateRoute } from "../helpers/PrivateRoute";

const Home = lazy(() => import("../pages/Home"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const Feedback = lazy(() => import("../pages/Feedback"));
const Goods = lazy(() => import("../pages/Goods"));
const OrdersHistoryPage = lazy(() => import("../pages/OrdersHistoryPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

function App() {
  const [addProductCategory, setaAddProductCategory] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const addProductByCategory = (id: string) => {
    setaAddProductCategory(id);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "index"}>
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor="#fffefe" highlightColor="#e0e0e0">
          <Routes>
            <Route
              path="/"
              element={
                <SharedLayout addProductByCategory={addProductByCategory} />
              }
            >
              <Route index element={<Home />} />
              <Route
                path="goods"
                element={<Goods addProductCategory={addProductCategory} />}
              />
              <Route path="feedback" element={<Feedback />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route
                path="orders"
                element={
                  <PrivateRoute redirectTo="/" component={OrdersHistoryPage} />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </SkeletonTheme>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;

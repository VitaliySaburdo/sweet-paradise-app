import { useAppDispatch } from "../hooks/reduxHook";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { refreshUser } from "../redux/auth/authOperations";
import { StyleSheetManager } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { SharedLayout } from "../components/SharedLayout/SharedLayout";
import { Home } from "../pages/Home";
import { Goods } from "../pages/Goods";
import { Feedback } from "../pages/Feedback";
import { NotFound } from "../pages/NotFound";
import { ContactsPage } from "../pages/ContactsPage";
import { OrdersHistory } from "../pages/OrdersHistory";

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
        <SkeletonTheme baseColor="#c2c1c1" highlightColor="#e0e0e0">
          <Routes>
            <Route
              path="/"
              element={
                <SharedLayout addProductByCategory={addProductByCategory} />
              }
            >
              <Route index element={<Home />} />
              <Route
                path="/goods"
                element={<Goods addProductCategory={addProductCategory} />}
              />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/orders" element={<OrdersHistory />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </SkeletonTheme>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;

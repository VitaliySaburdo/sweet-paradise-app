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
import { OrderProps } from "./App.types";
import { Feedback } from "../pages/Feedback";
import { NotFound } from "../pages/NotFound";
import { ContactsPage } from "../pages/ContactsPage";


function App() {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [addProductCategory, setaAddProductCategory] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const increment = (id: string) => {
    setOrders((orders) => {
      return orders.map((order) => {
        if (order._id === id) {
          return {
            ...order,
            quantity: ++order.quantity,
            totalPrice: order.quantity * order.price,
          };
        }
        return order;
      });
    });
  };

  const decrement = (id: string) => {
    setOrders((orders) => {
      return orders.map((order) => {
        if (order._id === id) {
          return {
            ...order,
            quantity: order.quantity - 1 < 1 ? 1 : --order.quantity,
            totalPrice: order.quantity * order.price,
          };
        }
        return order;
      });
    });
  };

  const changeValue = (id: string, value: number) => {
    setOrders((orders) => {
      return orders.map((order) => {
        if (order._id === id) {
          return {
            ...order,
            quantity: value,
            totalPrice: value * order.price,
          };
        }
        return order;
      });
    });
  };

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
                <SharedLayout
                  increment={increment}
                  decrement={decrement}
                  changeValue={changeValue}
                  addProductByCategory={addProductByCategory}
                />
              }
            >
              <Route
                index
                element={<Home orders={orders} />}
              />
              <Route
                path="/goods"
                element={
                  <Goods
                    orders={orders}
                    addProductCategory={addProductCategory}
                  />
                }
              />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </SkeletonTheme>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;

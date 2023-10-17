import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { refreshUser } from "../redux/auth/operations";
import { getProductsByCategories } from "../services/apiService";
import { StyleSheetManager } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { SharedLayout } from "../components/SharedLayout/SharedLayout";
import { Home } from "../pages/Home";
import { Goods } from "../pages/Goods";
import { ProductProps, OrderProps } from "./App.types";
import { Feedback } from "../pages/Feedback";
import { NotFound } from "../pages/NotFound";
import { ContactsPage } from "../pages/ContactsPage";

function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [addProductCategory, setaAddProductCategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser() as any);
  }, [dispatch]);

  const addOrder = (product: ProductProps): void => {
    const isAlreadyInCart = orders.some((item) => item._id === product._id);
    if (!isAlreadyInCart) {
      const updatedOrders = [
        ...orders,
        {
          ...product,
          quantity: 1,
          totalPrice: product.price,
        },
      ];
      setOrders(updatedOrders);
    }
  };
  const deleteOrder = (product: ProductProps): void => {
    const updatedOrders = orders.filter((item) => item._id !== product._id);
    setOrders(updatedOrders);
  };

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

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductsByCategories("64dcc4148efcb0f7600c8cd0");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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
                  orders={orders}
                  deleteOrder={deleteOrder}
                  increment={increment}
                  decrement={decrement}
                  changeValue={changeValue}
                  addProductByCategory={addProductByCategory}
                />
              }
            >
              <Route
                index
                element={
                  <Home
                    products={products}
                    orders={orders}
                    onAdd={addOrder}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/goods"
                element={
                  <Goods
                    orders={orders}
                    onAdd={addOrder}
                    loading={loading}
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

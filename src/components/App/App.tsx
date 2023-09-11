import { useEffect, useState } from "react";
import { getProductsByCategories } from "../apiService/apiService";
import { StyleSheetManager } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Home } from "../../pages/Home";
import { Goods } from "../../pages/Goods";
import { ProductProps } from "./App.types";

function App() {
  const [novelties, setNovelties] = useState([]);
  const [orders, setOrders] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

const addOrder = (novelty: ProductProps): void => {
  const isAlreadyInCart = orders.some((item) => item._id === novelty._id);
  if (!isAlreadyInCart) {
    const updatedOrders = [
      ...orders,
      {
        ...novelty,
        quantity: 1, 
        totalPrice: novelty.price,
      },
    ];
    setOrders(updatedOrders);
    console.log(updatedOrders);
  }
};
  const deleteOrder = (novelty: ProductProps): void => {
    const updatedOrders = orders.filter((item) => item._id !== novelty._id);
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
        setNovelties(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);


  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "index"}>
      <ThemeProvider theme={theme}>
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
              />
            }
          >
            <Route
              index
              element={
                <Home
                  novelties={novelties}
                  orders={orders}
                  onAdd={addOrder}
                  loading={loading}
                />
              }
            />
            <Route path="/goods" element={<Goods />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;

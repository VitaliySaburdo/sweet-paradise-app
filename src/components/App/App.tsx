import { useEffect, useState } from "react";
import { getProductsByCategories } from "../apiService/apiService";
import { StyleSheetManager } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Home } from "../../pages/Home";
import { Catalog } from "../../pages/Catalog";
import {ProductProps} from './App.types';

function App() {
  const [novelties, setNovelties] = useState([]);
  const [orders, setOrders] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  
  const addOrder = (novelty: ProductProps): void  => {
    setOrders([...orders, novelty])
  }

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
          <Route path="/" element={<SharedLayout orders={orders} />}>
            <Route index element={<Home novelties={novelties} onAdd={addOrder} loading={loading} />} />
            <Route path="/catalog" element={<Catalog />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;

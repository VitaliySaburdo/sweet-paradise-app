import { StyleSheetManager } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";

function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "index"}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;

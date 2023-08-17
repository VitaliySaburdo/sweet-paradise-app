import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { SharedLayout } from "./SharedLayout/SharedLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <h2>Test</h2>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

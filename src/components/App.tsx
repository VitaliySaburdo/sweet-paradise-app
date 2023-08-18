import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from '../pages/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

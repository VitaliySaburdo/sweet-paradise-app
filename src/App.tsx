import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h2>Test</h2>
      </ThemeProvider>
  );
}

export default App;

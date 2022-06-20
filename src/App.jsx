import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages";

import { StyledThemeProvider } from "./definitions/styled-components";
const App = () => (
  <StyledThemeProvider>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StyledThemeProvider>
);

export default App;

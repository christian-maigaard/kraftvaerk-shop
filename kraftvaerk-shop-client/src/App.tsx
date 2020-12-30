import React, { useState, useMemo } from "react";
import { Navigation } from "./components/Navigation";
import { AppRouter } from "./components/AppRouter";
import { BasketProvider } from "./context/BasketProvider";

export const App = () => {
  return (
    <BasketProvider>
      <Navigation />
      <div className="vh-100 p-3">
        <AppRouter />
      </div>
    </BasketProvider>
  );
};

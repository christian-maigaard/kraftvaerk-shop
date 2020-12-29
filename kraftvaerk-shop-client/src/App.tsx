import React from "react";
import { Navigation } from "./components/Navigation";
import { AppRouter } from "./components/AppRouter";
import "./style/app.css";

export const App = () => {
  return (
    <>
      <Navigation />
      <div className="page-content">
        <AppRouter />
      </div>
    </>
  );
};

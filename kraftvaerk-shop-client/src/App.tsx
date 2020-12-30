import React from "react";
import { Navigation } from "./components/Navigation";
import { AppRouter } from "./components/AppRouter";
import "./style/app.css";

export const App = () => {
  return (
    <>
      <Navigation />
      <div className="vh-100 p-3">
        <AppRouter />
      </div>
    </>
  );
};

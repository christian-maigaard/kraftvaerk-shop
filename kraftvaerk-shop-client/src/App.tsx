import React from "react";
import { Navigation } from "./components/Navigation";
import { Switch, Route, Redirect } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Products } from "./pages/Products";


export const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/about">
          <About />
          
        </Route>

        <Redirect to="/" />
      </Switch>
    </>
  );
};

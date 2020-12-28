import React from "react";
import { Navigation } from "./components/Navigation";
import { Switch, Route, Redirect } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Products } from "./pages/Products";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <>
      <Navigation />
      <div style={{ height: "100vh" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
};

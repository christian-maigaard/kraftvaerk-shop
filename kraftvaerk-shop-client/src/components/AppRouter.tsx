import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Basket } from "../pages/Basket";
import { Products } from "../pages/Products";
import { Product } from "../pages/Product";
import { Error } from "../pages/Error";
import { Checkout } from "../pages/checkout/Checkout";
import { OrderConfirmation } from "./../pages/checkout/OrderConfirmation";

interface MatchParams {
  id: string;
}

const ProductById = ({ match }: RouteComponentProps<MatchParams>) => {
  return <Product productId={match.params.id} />;
};

export const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={ProductById} />
      <Route exact path="/basket" component={Basket} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/checkout/confirmation" component={OrderConfirmation} />
      <Route exact path="/about" component={About} />
      <Route component={Error} />
    </Switch>
  );
};

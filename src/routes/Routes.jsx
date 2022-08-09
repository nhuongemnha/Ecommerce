import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Catalog from "../pages/Catalog/Catalog";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/catalog/:slug" element={<Product />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
    </Switch>
  );
};

export default Routes;

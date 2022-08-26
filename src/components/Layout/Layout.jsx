import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Catalog from "../../pages/Catalog/Catalog";
import Routes from "../../routes/Routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductViewModal from "../ProductViewModal/ProductViewModal";

const Layout = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="*"
          element={
            <div>
              <Header />
              <div className="container">
                <div className="main">
                  <Routes />
                </div>
              </div>
              <Footer />
              <ProductViewModal/>
            </div>
          }
          
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;

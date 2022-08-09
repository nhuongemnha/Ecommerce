import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Routes from "../../routes/Routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
            </div>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;

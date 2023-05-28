import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeMenu from "./components/header";
import IndexPage from "./components/home";
import FooterMenu from "./components/footer";
import ProductsPage from "./components/products";
import TestimonialsPage from "./components/testimonials";
import AboutPage from "./components/about";
import "./components/styles.css";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/auth_exe";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <HomeMenu />
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/product">
              <ProductsPage />
            </Route>
            <Route path="/home">
              <IndexPage />
            </Route>
            <Route path="/testimonial">
              <TestimonialsPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
      <FooterMenu />
    </div>
  );
}

export default App;

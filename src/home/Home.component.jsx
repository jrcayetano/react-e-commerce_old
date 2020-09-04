import React from "react";
import Sidenav from "./components/Sidenav/Sidenav.component";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid>
      <Header className="header" />
      <div className="homeContainer">
        <Sidenav />
        <div className="main-content-wrapper">
          <Route path="/home/products" component={ProductsSection} />
        </div>
      </div>
    </Container>
  );
};

export default Home;

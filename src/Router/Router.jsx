import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Index from "../pages/Index/Index";
import Home from "../pages/Home/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Index />} exact />
          <Route path="/Home" element={<Home />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

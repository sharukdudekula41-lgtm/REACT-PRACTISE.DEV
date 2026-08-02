import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../PAGES/Products";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  );
};

export default Routing;
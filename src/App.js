import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import "./App.css";

//  1 npm install route
// 2 create two pages
//  product listing page
// product detail page
//
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:slug" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

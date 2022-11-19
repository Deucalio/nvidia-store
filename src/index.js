import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/buy" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

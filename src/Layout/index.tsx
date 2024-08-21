import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./style.css";
import GridList from "../Pages/ProductList/GridList";
import Cart from "../Pages/Cart";
import NotFoundPage from "../Pages/NotFound";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  const url = useLocation();
  const { pathname } = url;
  const [isCorrectUrl, setIsCorrectUrl] = useState(
    pathname === "/" || pathname === "/home" || pathname === "/cart"
  );

  return (
    <main className="min-w-full min-h-full grid grid-flow-row bg-white gap-16">
      {isCorrectUrl && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<GridList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isCorrectUrl && <Footer />}
    </main>
  );
};

export default Layout;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Products from './pages/Menu/Products';
import ProductSpec from './pages/Menu/Components/ProductSpec/ProductSpec';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:id" element={<ProductSpec />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

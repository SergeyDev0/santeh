import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../../pages/home';
import Catalog from './../../pages/catalog';
import Contacts from "../../pages/contacts";
import About from "../../pages/about";
import ProductPage from "../../pages/productPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/catalog' element={ <Catalog /> } />
        <Route path='/:id' element={ <ProductPage /> } />
        <Route path='/contacts' element={ <Contacts /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;

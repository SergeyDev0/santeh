import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../../pages/home';
import About from "../../pages/about";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;

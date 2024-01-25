import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from './Components/static/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/one.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './Components';
import { CatalogPage } from './Components/catalogpage';
import { Pricelist } from './Components/pricepage';
import { Footer } from './Components/static/Footer';
import { AboutUs } from './Components/aboutus';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/yslugi' element={<CatalogPage />} />
      <Route path='/pricelist' element={<Pricelist />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);

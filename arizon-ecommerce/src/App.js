import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import { CartProvider } from './context/CartContext';
import './App.css'
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>     
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<FeaturedProducts />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

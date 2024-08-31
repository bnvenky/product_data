import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';

import Home from './components/Home';

import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  


  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
    <Routes>
      
      {/* Dashboard Routes */}
      <Route path="/" element={<Dashboard/> } >
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Homepage/Home';
import Shop from './pages/Shop/Shop';
import Header from './pages/Homepage/Layout/Header';
import TopBar from './pages/Homepage/Layout/TopBar';
import Categories from './pages/Categories/Categories';
import SubCategory from './pages/Categories/Subcategories.jsx/SubCategory';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import About from './pages/About/About';
import ContactUs from './pages/contact/ContactUs';
import Checkout from './pages/Shop/Checkout';

function App() {
  const dispatch = useDispatch();
  const { cart, totalPrice, favorites, favoriteCount } = useSelector(
    (state) => state || {} // Access under cartReducer
  );

  // Load cart and favorites from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    const savedFavoriteCount = JSON.parse(localStorage.getItem('favoriteCount')); // Load favoriteCount

    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: savedCart });
    }
    if (savedFavorites) {
      dispatch({ type: 'LOAD_FAVORITES', payload: savedFavorites });
    }
    if (savedFavoriteCount !== null) { // Check for null as localStorage might not have it initially
      dispatch({ type: 'SET_FAVORITE_COUNT', payload: savedFavoriteCount }); // Dispatch an action to set the count
    }
  }, [dispatch]);

  // Save cart and favorites to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('favoriteCount', JSON.stringify(favoriteCount));
    localStorage.setItem('favorites', JSON.stringify(favorites)); // Save favorites
  }, [cart, favorites, favoriteCount]); // Save favorites whenever they change

  return (
    <Router>
      <TopBar />
      <Header
        cart={cart}
        totalPrice={totalPrice}
        favoriteCount={favoriteCount} // Pass favoriteCount as a prop
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
       
        <Route path="/category/:subcategory" element={<SubCategory />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
        {/* 
       */}
      </Routes>
    </Router>
  );
}

export default App;

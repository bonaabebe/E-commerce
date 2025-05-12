import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Home from './pages/Homepage/Home';
import Shop from './pages/Shop/Shop';
import Header from './pages/Homepage/Layout/Header';
import TopBar from './pages/Homepage/Layout/TopBar';

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
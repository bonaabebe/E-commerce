import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector
import "../../../App.css";
import FavoritesModal from "./FavoritesModal";
import CartModal from "./CartModal";

function Header() {
  const cart = useSelector((state) => state.cart);
  const favoriteCount = useSelector((state) => state.favoriteCount); // Get favoriteCount from Redux
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const openFavoritesModal = () => {
    setIsFavoritesModalOpen(true);
  };

  const closeFavoritesModal = () => {
    setIsFavoritesModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "" : "hidden";
  };

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>

            <div className="logo">
              <Link to="/">
                <span className="logo-icon">🛍️</span>
                <span className="logo-text">LuxuryCart</span>
              </Link>
            </div>

            <nav className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
              
                <li
                  className="mega-menu-trigger"
                  onMouseEnter={toggleMegaMenu}
                  onMouseLeave={toggleMegaMenu}
                >
                  <span className="nav-link">
                    Categories <i className="fas fa-chevron-down"></i>
                  </span>
                  {isMegaMenuOpen && (
                    <div className="mega-menu">
                      <div className="mega-menu-column">
                        <h4>Electronics</h4>
                        <ul>
                          <li><Link to="/category/smartphones">Smartphones</Link></li>
                          <li><Link to="/category/laptops">Laptops</Link></li>
                          <li><Link to="/category/headphones">Headphones</Link></li>
                          <li><Link to="/category/smart-watches">Smart Watches</Link></li>
                        </ul>
                      </div>
                      <div className="mega-menu-column">
                        <h4>Fashion</h4>
                        <ul>
                          <li><Link to="/category/mens-clothing">Men's Clothing</Link></li>
                          <li><Link to="/category/womens-clothing">Women's Clothing</Link></li>
                          <li><Link to="/category/jewelry">Jewelry</Link></li>
                          <li><Link to="/category/accessories">Accessories</Link></li>
                        </ul>
                      </div>
                      <div className="mega-menu-column">
                        <h4>Home & Living</h4>
                        <ul>
                          <li><Link to="/category/furniture">Furniture</Link></li>
                          <li><Link to="/category/kitchenware">Kitchenware</Link></li>
                          <li><Link to="/category/decor">Decor</Link></li>
                          <li><Link to="/category/lighting">Lighting</Link></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            <div className="header-actions">
              <div className="search-box">
                <input type="text" placeholder="Search products..." />
                <button className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="action-icons">
                <Link to="#" className="user-icon">
                  <i className="far fa-user"></i>
                </Link>
                <Link onClick={openFavoritesModal} className="wishlist-icon">
                  <i className="far fa-heart"></i>
                  <span className="wishlist-count">{favoriteCount}</span> {/* Use favoriteCount from Redux */}
                </Link>

                <FavoritesModal isOpen={isFavoritesModalOpen} onClose={closeFavoritesModal} />

                <Link onClick={openCartModal} className="cart-icon">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="cart-count">{cart.length}</span>
                </Link>
                <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
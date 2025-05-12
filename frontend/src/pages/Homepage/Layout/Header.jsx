import { useState } from "react";
import '../../../App.css';
function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [wishlistCount, setWishlistCount] = useState(3);
    const [cartCount, setCartCount] = useState(2);
    const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden'; // Prevent scroll when menu is open
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
                            <a href="#">
                                <span className="logo-icon">🛍️</span>
                                <span className="logo-text">LuxuryCart</span>
                            </a>
                        </div>
                        
                        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                            <ul>
                                <li><a href="#" className="active">Home</a></li>
                                <li><a href="shop">Shop</a></li>
                                <li className="mega-menu-trigger" onMouseEnter={toggleMegaMenu} onMouseLeave={toggleMegaMenu}>
                                    <a href="#categories">Categories <i className="fas fa-chevron-down"></i></a>
                                    {isMegaMenuOpen && (
                                        <div className="mega-menu">
                                            <div className="mega-menu-column">
                                                <h4>Electronics</h4>
                                                <ul>
                                                    <li><a href="#">Smartphones</a></li>
                                                    <li><a href="#">Laptops</a></li>
                                                    <li><a href="#">Headphones</a></li>
                                                    <li><a href="#">Smart Watches</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu-column">
                                                <h4>Fashion</h4>
                                                <ul>
                                                    <li><a href="#">Men's Clothing</a></li>
                                                    <li><a href="#">Women's Clothing</a></li>
                                                    <li><a href="#">Jewelry</a></li>
                                                    <li><a href="#">Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu-column">
                                                <h4>Home & Living</h4>
                                                <ul>
                                                    <li><a href="#">Furniture</a></li>
                                                    <li><a href="#">Kitchenware</a></li>
                                                    <li><a href="#">Decor</a></li>
                                                    <li><a href="#">Lighting</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu-promo">
                                                <img src="https://via.placeholder.com/300x200" alt="Mega Menu Promotion" />
                                                <div className="promo-content">
                                                    <h4>Seasonal Sale</h4>
                                                    <p>Up to 40% off selected items</p>
                                                    <a href="#" className="promo-btn">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                        
                        <div className="header-actions">
                            <div className="search-box">
                                <input type="text" placeholder="Search products..." />
                                <button className="search-btn"><i className="fas fa-search"></i></button>
                            </div>
                            <div className="action-icons">
                                <a href="#" className="user-icon"><i className="far fa-user"></i></a>
                                <a href="#" className="wishlist-icon">
                                    <i className="far fa-heart"></i>
                                    <span className="wishlist-count">{wishlistCount}</span>
                                </a>
                                <a href="#" className="cart-icon">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="cart-count">{cartCount}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;

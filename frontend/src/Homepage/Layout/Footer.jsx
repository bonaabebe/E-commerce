
function Footer() {

 
    return (
        <>
        <footer className="main-footer">
        <div className="footer-top">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col about-col">
                        <div className="footer-logo">
                            <span className="logo-icon">🛍️</span>
                            <span className="logo-text">LuxuryCart</span>
                        </div>
                        <p className="footer-about">LuxuryCart is a premium e-commerce platform offering high-quality products with exceptional customer service.</p>
                        <div className="footer-social">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    
                    <div className="footer-col">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h3 className="footer-title">Customer Service</h3>
                        <ul className="footer-links">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns & Refunds</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h3 className="footer-title">Contact Info</h3>
                        <ul className="footer-contact">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>123 Main Street, New York, NY 10001</span>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>info@luxurycart.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-bottom-content">
                    <p className="copyright">&copy; 2023 LuxuryCart. All Rights Reserved.</p>
                    <div className="payment-methods">
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-amex"></i>
                        <i className="fab fa-cc-paypal"></i>
                        <i className="fab fa-cc-apple-pay"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    
    )
  }
  
  export default Footer
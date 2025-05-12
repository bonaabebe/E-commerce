


function MobileMenu() {
 
    return (
        <>
       <div className="mobile-menu">
        <div className="mobile-menu-header">
            <div className="logo">
                <span className="logo-icon">🛍️</span>
                <span className="logo-text">LuxuryCart</span>
            </div>
            <button className="mobile-menu-close"><i className="fas fa-times"></i></button>
        </div>
        <div className="mobile-menu-body">
            <ul className="mobile-nav">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li className="menu-item-has-children">
                    <a href="#">Categories <i className="fas fa-chevron-down"></i></a>
                    <ul className="sub-menu">
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Home & Living</a></li>
                        <li><a href="#">Beauty</a></li>
                    </ul>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="mobile-menu-footer">
                <div className="mobile-actions">
                    <a href="#"><i className="far fa-user"></i> Account</a>
                    <a href="#"><i className="far fa-heart"></i> Wishlist</a>
                    <a href="#"><i className="fas fa-shopping-bag"></i> Cart</a>
                </div>
            </div>
        </div>
    </div>
        
        </>
    
    )
  }
  
  export default MobileMenu
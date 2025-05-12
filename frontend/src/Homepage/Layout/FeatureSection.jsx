function FeatureSection() {
    return (
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <div className="feature-content">
                <h3>Free Shipping</h3>
                <p>On all orders over $100</p>
              </div>
            </div>
  
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-undo"></i>
              </div>
              <div className="feature-content">
                <h3>Easy Returns</h3>
                <p>30-day return policy</p>
              </div>
            </div>
  
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="feature-content">
                <h3>Secure Payment</h3>
                <p>100% secure checkout</p>
              </div>
            </div>
  
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="feature-content">
                <h3>24/7 Support</h3>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default FeatureSection;
  
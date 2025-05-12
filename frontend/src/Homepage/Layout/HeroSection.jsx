function HeroSection() {
    return (
      <>
        <section className="hero">
          <div className="hero-slider">
            <div
              className="hero-slide active"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`
              }}
            >
              <div className="container">
                <div className="hero-content">
                  <span className="hero-subtitle">New Collection</span>
                  <h1 className="hero-title">Summer Fashion 2023</h1>
                  <p className="hero-text">
                    Discover our exclusive collection of premium clothing and accessories
                  </p>
                  <a href="#" className="hero-btn">Shop Now</a>
                </div>
              </div>
            </div>
  
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`
              }}
            >
              <div className="container">
                <div className="hero-content">
                  <span className="hero-subtitle">Limited Offer</span>
                  <h1 className="hero-title">30% Off Electronics</h1>
                  <p className="hero-text">
                    Premium gadgets and devices for your everyday life
                  </p>
                  <a href="#" className="hero-btn">Explore Deals</a>
                </div>
              </div>
            </div>
  
            <div className="slider-controls">
              <button className="slider-prev">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="slider-next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
  
            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default HeroSection;
  
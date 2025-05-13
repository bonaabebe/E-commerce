function CategoriesSection() {
    return (
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <a href="/categories" className="view-all">View All</a>
          </div>
  
          <div className="categories-grid">
            <a href="#" className="category-card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80"
                  alt="Electronics"
                />
              </div>
              <div className="category-content">
                <h3>Electronics</h3>
                <span className="shop-now">
                  Shop Now <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
  
            <a href="#" className="category-card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Fashion"
                />
              </div>
              <div className="category-content">
                <h3>Fashion</h3>
                <span className="shop-now">
                  Shop Now <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
  
            <a href="#" className="category-card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1556909211-d5b0d8f5e9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Home & Living"
                />
              </div>
              <div className="category-content">
                <h3>Home & Living</h3>
                <span className="shop-now">
                  Shop Now <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
  
            <a href="#" className="category-card">
              <div className="category-image">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Beauty"
                />
              </div>
              <div className="category-content">
                <h3>Beauty</h3>
                <span className="shop-now">
                  Shop Now <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default CategoriesSection;
  
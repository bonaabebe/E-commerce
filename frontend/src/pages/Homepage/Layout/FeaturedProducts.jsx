function FeaturedProducts() {
    return (
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <div className="product-tabs">
              <button className="tab-btn active">New Arrivals</button>
              <button className="tab-btn">Best Sellers</button>
              <button className="tab-btn">On Sale</button>
            </div>
          </div>
  
          <div className="products-grid">
            {/* Product Card 1 */}
            <div className="product-card">
              <div className="product-badge hot">Hot</div>
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
                  alt="Wireless Headphones"
                />
                <div className="product-actions">
                  <button className="quick-view"><i className="far fa-eye"></i></button>
                  <button className="add-to-wishlist"><i className="far fa-heart"></i></button>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">Electronics</span>
                <h3 className="product-title">Premium Wireless Headphones</h3>
                <div className="product-rating">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="rating-count">(128)</span>
                </div>
                <div className="product-price">
                  <span className="current-price">$149.99</span>
                  <span className="original-price">$199.99</span>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
  
            {/* Product Card 2 */}
            <div className="product-card">
              <div className="product-badge sale">25% Off</div>
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80"
                  alt="Smart Watch"
                />
                <div className="product-actions">
                  <button className="quick-view"><i className="far fa-eye"></i></button>
                  <button className="add-to-wishlist"><i className="far fa-heart"></i></button>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">Wearables</span>
                <h3 className="product-title">Smart Watch Series 5</h3>
                <div className="product-rating">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="rating-count">(86)</span>
                </div>
                <div className="product-price">
                  <span className="current-price">$179.99</span>
                  <span className="original-price">$239.99</span>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
  
            {/* Product Card 3 */}
            <div className="product-card">
              <div className="product-badge new">New</div>
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Running Shoes"
                />
                <div className="product-actions">
                  <button className="quick-view"><i className="far fa-eye"></i></button>
                  <button className="add-to-wishlist"><i className="far fa-heart"></i></button>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">Footwear</span>
                <h3 className="product-title">Pro Running Shoes</h3>
                <div className="product-rating">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="rating-count">(215)</span>
                </div>
                <div className="product-price">
                  <span className="current-price">$129.99</span>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
  
            {/* Product Card 4 */}
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                  alt="Backpack"
                />
                <div className="product-actions">
                  <button className="quick-view"><i className="far fa-eye"></i></button>
                  <button className="add-to-wishlist"><i className="far fa-heart"></i></button>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">Accessories</span>
                <h3 className="product-title">Travel Backpack</h3>
                <div className="product-rating">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="rating-count">(42)</span>
                </div>
                <div className="product-price">
                  <span className="current-price">$79.99</span>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default FeaturedProducts;
  
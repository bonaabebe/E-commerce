import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import products from './products'; // Your product data file

function FeaturedProducts() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);

  const [filter, setFilter] = useState('New Arrivals'); // Default tab

  // Add to cart
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  // Add to favorites
  const handleAddToFavorites = (product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  const handleRemoveFromFavorites = (product) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
  };

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }

    return stars;
  };

  // Filter logic
  const filteredProducts = products.filter((product) => {
    if (filter === 'New Arrivals') return product.badge === 'new';
    if (filter === 'Best Sellers') return product.rating >= 4.5;
    if (filter === 'On Sale') return product.badge === 'sale';
    return true;
  });

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-tabs">
            {['New Arrivals', 'Best Sellers', 'On Sale'].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.slice(0, 4).map((product) => (
            <div className="product-card" key={product.id}>
              {product.badge && (
                <div className={`product-badge ${product.badge}`}>
                  {product.badge === 'sale'
                    ? product.discount
                    : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
                </div>
              )}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-actions">
                  <button className="quick-view">
                    <i className="far fa-eye"></i>
                  </button>
                  <button
                    className="add-to-wishlist"
                    onClick={() =>
                      favorites.some((item) => item.id === product.id)
                        ? handleRemoveFromFavorites(product)
                        : handleAddToFavorites(product)
                    }
                  >
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-rating">
                  <div className="stars">{renderStars(product.rating)}</div>
                  <span className="rating-count">({product.reviews})</span>
                </div>
                <div className="product-price">
                  <span className="current-price">${product.currentPrice.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="original-price">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
                <button
                  className="add-to-cart"
                  onClick={() =>
                    cart.some((item) => item.id === product.id)
                      ? handleRemoveFromCart(product)
                      : handleAddToCart(product)
                  }
                >
                  {cart.some((item) => item.id === product.id)
                    ? 'Remove from Cart'
                    : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;

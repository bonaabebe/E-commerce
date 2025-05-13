import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import the Link component
import styles from './Shop.module.css'; // Assuming your styles are here

function ProductContainer({ products }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Assuming your cart is under state.cartReducer
  const favorites = useSelector((state) => state.favorites); // Assuming your favorites are under state.cartReducer

  const handleAddToFavorites = (product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  const handleRemoveFromFavorites = (product) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
  };

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      dispatch({ type: 'INCREASE_QUANTITY', payload: product });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } }); // Ensure quantity is included
    }
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

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

  return (
    <div className={styles['products-container']}>
      <div className={styles['products-grid']}>
        {products?.map((product) => {
          const isFavorite = favorites.some((item) => item.id === product.id);
          const isInCart = cart.some((item) => item.id === product.id);
          return (
            <div className="product-card" key={product.id}>
              {product.badge && (
                <div className={`product-badge ${product.badge}`}>
                  {product.badge === 'sale'
                    ? product.discount
                    : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
                </div>
              )}
              <div className="product-image">
                <Link to={`/product/${product.id}`}> {/* Link to product details */}
                  <img src={product.image} alt={product.title} />
                </Link>
                <div className="product-actions">
                  <Link to={`/product/${product.id}`} className="quick-view"> {/* Link for quick view */}
                    <i className="far fa-eye"></i>
                  </Link>
                  <button
                    className="add-to-wishlist"
                    onClick={() =>
                      isFavorite
                        ? handleRemoveFromFavorites(product)
                        : handleAddToFavorites(product)
                    }
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <i className={`fa-heart ${isFavorite ? 'fas' : 'far'}`}></i>
                  </button>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">
                  <Link to={`/product/${product.id}`}>{product.title}</Link> {/* Link on title */}
                </h3>
                <div className="product-rating">
                  <div className="stars">{renderStars(product.rating)}</div>
                  <span className="rating-count">({product.reviews})</span>
                </div>
                <div className="product-price">
                  <span className="current-price">${product.currentPrice?.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="original-price">${product.oldPrice?.toFixed(2)}</span>
                  )}
                </div>
                {isInCart ? (
                  <button
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '10px 15px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '1em',
                      transition: 'background-color 0.3s ease',
                      marginTop: '10px',
                    }}
                    className="remove-from-cart"
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {products?.length === 0 && <p>No products match the selected filters.</p>}
      </div>
    </div>
  );
}

export default ProductContainer;
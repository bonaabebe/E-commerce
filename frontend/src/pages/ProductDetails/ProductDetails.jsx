// src/pages/ProductDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../Homepage/Layout/products'; // Import your product data
import styles from './ProductDetails.module.css'; // Import the CSS module
import { useDispatch } from 'react-redux'; // Import useDispatch for Redux actions

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.color || '');

  if (!product) {
    return <div className={styles.notFound}>Product not found.</div>;
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity, selectedSize, selectedColor },
    });
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
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
    return <div className={styles.starRating}>{stars}</div>;
  };

  return (
    <div className={styles.productDetailsPage}>
      <div className={styles.productImage}>
        <img src={product.image || '/images/default-product.png'} alt={product.title} />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <div className={styles.price}>
          <span className={styles.currentPrice}>${product.currentPrice?.toFixed(2)}</span>
          {product.oldPrice && (
            <span className={styles.originalPrice}>${product.oldPrice?.toFixed(2)}</span>
          )}
        </div>
        <div className={styles.rating}>
          {renderStars(product.rating)}
          <span className={styles.reviewCount}>({product.reviews} reviews)</span>
        </div>
        <div className={styles.description}>
          <h3 className={styles.sectionTitle}>Description</h3>
          {product.description ? (
            <p className={styles.productDescription}>{product.description}</p>
          ) : (
            <p className={styles.noDescription}>No description available for this product.</p>
          )}
        </div>
        <div className={styles.details}>
          <h3 className={styles.sectionTitle}>Details</h3>
          <ul className={styles.detailsList}>
            <li><span className={styles.detailLabel}>Brand:</span> {product.brand}</li>
            <li><span className={styles.detailLabel}>Category:</span> {product.category}</li>
            {product.color && (
              <li>
                <span className={styles.detailLabel}>Color:</span>
                <select value={selectedColor} onChange={handleColorChange} className={styles.colorSelect}>
                  {Array.isArray(product.color) ? (
                    product.color.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))
                  ) : (
                    <option value={product.color}>{product.color}</option>
                  )}
                </select>
              </li>
            )}
            {product.sizes && product.sizes.length > 0 && (
              <li>
                <span className={styles.detailLabel}>Size:</span>
                <select value={selectedSize} onChange={handleSizeChange} className={styles.sizeSelect}>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </li>
            )}
            {/* Add more details as needed */}
          </ul>
        </div>

        <div className={styles.quantityControl}>
          <span className={styles.quantityLabel}>Quantity:</span>
          <button className={styles.quantityButton} onClick={handleDecrement}>-</button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.quantityButton} onClick={handleIncrement}>+</button>
        </div>

        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Reviews Section */}
        {product.reviewsData && product.reviewsData.length > 0 && (
          <div className={styles.reviewsSection}>
            <h3 className={styles.sectionTitle}>Customer Reviews</h3>
            <ul className={styles.reviewsList}>
              {product.reviewsData.map((review, index) => (
                <li key={index} className={styles.reviewItem}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewerName}>{review.author}</span>
                    <div className={styles.reviewRating}>
                      {renderStars(review.rating)}
                    </div>
                    <span className={styles.reviewDate}>{review.date}</span>
                  </div>
                  <p className={styles.reviewComment}>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!product.reviewsData && (
          <div className={styles.reviewsSection}>
            <h3 className={styles.sectionTitle}>Customer Reviews</h3>
            <p>No reviews yet for this product.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
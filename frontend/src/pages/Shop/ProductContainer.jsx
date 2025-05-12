import React from 'react';
import styles from './Shop.module.css'; // Import the CSS Module

function ProductContainer({ products }) {
  return (
    <div className={styles['products-container']}>
      <div className={styles['products-grid']}>
        {products.map((product) => (
          <div key={product.id} className={styles['product-card']}>
            {product.badge && (
              <div
                className={`${styles['product-badge']} ${styles[
                  `badge-${product.badge.toLowerCase()}`
                ]}`}
              >
                {product.badge}
              </div>
            )}
            <div className={styles['product-image']}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles['product-content']}>
              <span className={styles['product-category']}>{product.category}</span>
              <h3 className={styles['product-title']}>{product.title}</h3>
              <div className={styles['product-price']}>
                <span className={styles['current-price']}>{product.currentPrice}</span>
                {product.oldPrice && (
                  <span className={styles['old-price']}>{product.oldPrice}</span>
                )}
              </div>
              <button className={styles['add-to-cart']}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
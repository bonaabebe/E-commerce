// src/pages/Categories/SubCategory.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './sub.module.css';
import products from '../../Homepage/Layout/products'; // Import your products data

const getProductsBySubcategory = (subcategoryName) => {
  return products.filter(
    (product) => product.subcategory && product.subcategory.toLowerCase() === subcategoryName.toLowerCase()
  );
};

const SubCategory = () => {
  const { subcategory: currentSubcategory } = useParams(); // Use 'subcategory' here
  const productList = getProductsBySubcategory(currentSubcategory);

  // Function to format the subcategory name for display
  const formatSubcategoryName = (name) => {
    return name
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize first letter of each word
  };

  return (
    <div className={styles.subcategoriesPage}>
      <h1>{formatSubcategoryName(currentSubcategory)}</h1>
      <div className={styles.subcategoriesGrid}>
        {productList && productList.map((product) => (
          <div key={product.id} className={styles.subcategoryCard}>
            <Link to={`/product/${product.id}`}>
              <div className={styles.imageContainer}>
                <img src={product.image || '/images/default-product.png'} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <div className={styles.productPrice}>
                <span className={styles.currentPrice}>${product.currentPrice?.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className={styles.originalPrice}>${product.oldPrice?.toFixed(2)}</span>
                )}
              </div>
            </Link>
          </div>
        ))}
        {!productList && <p>No products found for {formatSubcategoryName(currentSubcategory)}.</p>}
      </div>
    </div>
  );
};

export default SubCategory;
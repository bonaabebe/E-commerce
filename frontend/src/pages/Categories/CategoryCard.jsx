import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ name, image, productCount, link }) => {
  return (
    <Link to={link} className={styles.categoryCard}>
      <div className={styles.categoryImage}>
        <img src={image} alt={name} />
        <div className={styles.categoryOverlay}></div>
      </div>
      <div className={styles.categoryContent}>
        <h3 className={styles.categoryName}>{name}</h3>
        <p className={styles.productCount}>{productCount} products</p>
        <span className={styles.shopNow}>
          Shop Now <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
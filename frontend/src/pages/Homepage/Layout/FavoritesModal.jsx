import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './FavoritesModal.module.css';

const FavoritesModal = ({ isOpen, onClose }) => {
  // Safely get favorites with fallback to empty array
  const favorites = useSelector((state) => state.favorites || []);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Calculate pagination values
  const totalPages = Math.max(1, Math.ceil(favorites.length / itemsPerPage));
  const currentFavorites = favorites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleRemoveFromFavorites = (product) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Your Favorites</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className={styles.modalBody}>
          {favorites.length === 0 ? (
            <p className={styles.emptyMessage}>No items in your favorites yet!</p>
          ) : (
            <>
              <ul className={styles.favoritesList}>
                {currentFavorites.map((product) => (
                  <li key={product.id} className={styles.favoriteItem}>
                    <div className={styles.itemInfo}>
                      <img
                        src={product.image || '/images/default-product.png'}
                        alt={product.name || product.title || 'Product'}
                        className={styles.itemImage}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/default-product.png';
                        }}
                      />
                      <div className={styles.itemDetails}>
                        <p className={styles.itemName}>{product.name || product.title}</p>
                        <p className={styles.itemPrice}>
                          ${(product.price || product.currentPrice || 0).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromFavorites(product)}
                      className={styles.removeButton}
                      aria-label={`Remove ${product.name} from favorites`}
                    >
                      <i className="far fa-trash-alt"></i> Remove
                    </button>
                  </li>
                ))}
              </ul>

              {totalPages > 1 && (
                <div className={styles.pagination}>
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={styles.pageButton}
                  >
                    Previous
                  </button>
                  <span className={styles.pageInfo}>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={styles.pageButton}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
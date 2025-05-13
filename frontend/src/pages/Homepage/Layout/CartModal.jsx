import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CartModal.module.css';
import { useNavigate } from 'react-router-dom';
import StripeButton from '../../Shop/StripeButton';

const itemsPerPage = 3;

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart); // Ensure correct path
  const totalPrice = useSelector((state) => state.totalPrice); // Ensure correct path
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleIncreaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const handleDecreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems, 'and total:', totalPrice);
    navigate('/checkout');
    onClose();
  };

  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = cartItems.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (!isOpen) {
    return null;
  }
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = typeof item.currentPrice === 'number' ? item.currentPrice : 0;
      return total + (itemPrice * (item.quantity || 1));
    }, 0);
  }
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Your Cart</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className={styles.modalBody}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <>
              <ul className={styles.cartList}>
                {currentItems.map((item) => (
                  <li key={item.id} className={styles.cartItem}>
                    <div className={styles.itemInfo}>
                      <img
                        src={item.image || 'placeholder_image_url'}
                        alt={item.name}
                        className={styles.itemImage}
                      />
                      <div className={styles.itemDetails}>
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemPrice}>
                          ${typeof item.currentPrice === 'number' // Use currentPrice here
                            ? (item.currentPrice * (item.quantity || 1)).toFixed(2)
                            : '0.00'}
                        </p>
                        <div className={styles.quantityControl}>
                          <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                          <span>{item.quantity || 1}</span>
                          <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className={styles.removeButton}
                    >
                      <i className="far fa-trash-alt"></i> Remove
                    </button>
                  </li>
                ))}
              </ul>
              {totalPages > 1 && (
                <div className={styles.pagination}>
                  <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <span>{currentPage} / {totalPages}</span>
                  <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className={styles.modalFooter}>
              <div className={styles.total}>
          <strong>Total:</strong> ${calculateTotalPrice().toFixed(2)}
        </div>
           <StripeButton/>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
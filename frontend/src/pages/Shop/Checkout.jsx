import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

const calculateTotals = () => {
    if (!cart.items || !Array.isArray(cart.items)) {
        console.error("cart.items is undefined or not an array:", cart.items);
        return { subtotal: 0, shippingCost: 0, tax: 0, total: 0 };
    }
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = shippingMethod === 'express' ? 15 : 5;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shippingCost + tax;

    return { subtotal, shippingCost, tax, total };
};

const { subtotal, shippingCost, tax, total } = calculateTotals();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
        type: 'CREATE_ORDER',
        payload: {
            items: cart.items,
            shippingAddress: formData,
            paymentMethod,
            shippingMethod,
            total: total // Using the calculated total here
        }
    });
    navigate('/order-confirmation');
};
  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <div className="breadcrumbs">
            <Link to="/cart">Cart</Link> / <span>Checkout</span>
          </div>
        </div>

        <div className="checkout-grid">
          {/* Left Column - Shipping and Payment */}
          <div className="checkout-form-container">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <section className="checkout-section">
                <h2>Shipping Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Address</label>
                    <input 
                      type="text" 
                      name="address" 
                      value={formData.address}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input 
                      type="text" 
                      name="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select 
                      name="country" 
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input 
                      type="text" 
                      name="zipCode" 
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
              </section>

              {/* Shipping Method */}
              <section className="checkout-section">
                <h2>Shipping Method</h2>
                <div className="radio-group">
                  <label className={`radio-option ${shippingMethod === 'standard' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="shipping" 
                      value="standard" 
                      checked={shippingMethod === 'standard'}
                      onChange={() => setShippingMethod('standard')}
                    />
                    <div className="radio-content">
                      <span className="radio-title">Standard Shipping</span>
                      <span className="radio-details">5-7 business days</span>
                      <span className="radio-price">$5.00</span>
                    </div>
                  </label>
                  <label className={`radio-option ${shippingMethod === 'express' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="shipping" 
                      value="express" 
                      checked={shippingMethod === 'express'}
                      onChange={() => setShippingMethod('express')}
                    />
                    <div className="radio-content">
                      <span className="radio-title">Express Shipping</span>
                      <span className="radio-details">2-3 business days</span>
                      <span className="radio-price">$15.00</span>
                    </div>
                  </label>
                </div>
              </section>

              {/* Payment Method */}
              <section className="checkout-section">
                <h2>Payment Method</h2>
                <div className="radio-group">
                  <label className={`radio-option ${paymentMethod === 'credit-card' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="credit-card" 
                      checked={paymentMethod === 'credit-card'}
                      onChange={() => setPaymentMethod('credit-card')}
                    />
                    <div className="radio-content">
                      <span className="radio-title">Credit Card</span>
                      <i className="fab fa-cc-visa"></i>
                      <i className="fab fa-cc-mastercard"></i>
                      <i className="fab fa-cc-amex"></i>
                    </div>
                  </label>
                  <label className={`radio-option ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="paypal" 
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                    />
                    <div className="radio-content">
                      <span className="radio-title">PayPal</span>
                      <i className="fab fa-cc-paypal"></i>
                    </div>
                  </label>
                </div>

                {/* Credit Card Form (conditionally rendered) */}
                {paymentMethod === 'credit-card' && (
                  <div className="credit-card-form">
                    <div className="form-group">
                      <label>Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="form-group">
                      <label>Name on Card</label>
                      <input type="text" placeholder="John Smith" required />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM/YY" required />
                      </div>
                      <div className="form-group">
                        <label>CVV</label>
                        <input type="text" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                )}
              </section>

              <button type="submit" className="place-order-btn">
                Place Order
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-items">
              {cart.items.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                    <span className="item-quantity">{item.quantity}</span>
                  </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total-row grand-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="secure-checkout">
              <i className="fas fa-lock"></i>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
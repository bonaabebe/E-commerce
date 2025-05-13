import React from 'react';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = () => {
  const totalPrice = useSelector((state) => state.totalPrice);
  const cartItems = useSelector((state) => state.cart);

  const handleToken = (token) => {
    console.log('Stripe Token:', token);
    console.log('Cart Items:', cartItems);
    console.log('Total Price:', totalPrice);

    // ⚠️ Ideally, you send the token and cart info to your backend:
    // await axios.post('/api/payment', { token, cartItems, totalPrice })
  };

  return (
    <StripeCheckout
      name="My Shop"
      description="Complete your purchase"
      amount={totalPrice * 100} // Stripe uses cents
      currency="USD"
      token={handleToken}
      stripeKey="pk_test_YourPublicKeyHere" // replace with your real key
      billingAddress
      shippingAddress
    >
      <button className="checkout-button">
        Pay with Stripe
      </button>
    </StripeCheckout>
  );
};

export default StripeButton;

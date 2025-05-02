import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
  const { cartItems, dispatch } = useCart();

  const handleQuantity = (id, qty) => {
    dispatch({ type: 'ADJUST_QUANTITY', payload: { id, quantity: qty } });
  };

  const removeItem = id => dispatch({ type: 'REMOVE_FROM_CART', payload: id });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      <div className='cart-items'>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
              <div className="quantity-adjuster">
                <button className="quantity-button" onClick={() => handleQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-button" onClick={() => handleQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            <button className='remove-btn' onClick={() => removeItem(item.id)}>Remove</button>
        </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping: ${shipping.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
        <button className="proceed-to-checkout-button" onClick={() => alert('Ordered successfully!')}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

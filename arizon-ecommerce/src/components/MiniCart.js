import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/MiniCart.css';

function MiniCart({onViewCart}) {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
        <div className="mini-cart">
          {cartItems.map(item => (
            <div key={item.id} className="mini-cart-item">
              <img src={item.image} alt={item.title} />
            <div className="mini-cart-item-details">
              <div className="mini-cart-item-title">{item.title}</div>
              <div className="mini-cart-item-quantity">Qty: {item.quantity}</div>
          </div>
        </div>
      ))}
      <div className="mini-cart-subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
      <div className="mini-cart-actions">
        <Link to='/cart'>
          <button className="view-cart-button" onClick={onViewCart}>View Cart</button>
        </Link>
        <button className="checkout-button" disabled onClick={() => alert('Ordered successfully!')}>Checkout</button>
      </div>
    </div>    
  );
}

export default MiniCart;

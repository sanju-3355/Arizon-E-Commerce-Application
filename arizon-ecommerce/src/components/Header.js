import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

function Header() {
  const {cartItems} = useCart()
  const [showMiniCart, setShowMiniCart] = useState(false);

  const toggleMiniCart = () => {
    setShowMiniCart(prev => !prev);
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img className='my-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReIlSsFco_GIijTD2IOCDEpEmGLVDi0B9lVQ&s' alt='logo' />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">
          <button className="cart-icon" onClick={toggleMiniCart}>
            Cart
            <span className="cart-count">{cartCount}</span>
          </button>
        </Link>
      </nav>
      {showMiniCart && <MiniCart items={cartItems} onViewCart={() => window.location.href = '/cart'} />}
    </header>
  );
}

export default Header;

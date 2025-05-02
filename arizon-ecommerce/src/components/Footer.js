import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/" className="footer-link">Home</a>
        <a href="/products" className="footer-link">Products</a>
        <a href="/contact" className="footer-link">Contact</a>
      </div>
      <p className='footer-text'>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
    </footer>
   
  );
}

export default Footer;

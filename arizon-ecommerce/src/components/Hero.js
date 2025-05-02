import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/Hero.css'

function Hero() {
  return (
    <section
      className="hero"
    >
      <h1 className="hero-title">Welcome to MyShop</h1>
      <Link to='/products' className='nav-link'>
        <button className='hero-button'>Shop Now</button>
      </Link>
    </section>
  );
}

export default Hero;

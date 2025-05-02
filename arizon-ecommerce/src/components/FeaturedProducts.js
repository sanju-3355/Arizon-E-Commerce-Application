// src/components/FeaturedProducts.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

import '../styles/FeaturedProducts.css';

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <section className="featured-products">
      <h2 className="featured-title">Featured Products</h2>
      <div className="product-grid">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}

export default FeaturedProducts;

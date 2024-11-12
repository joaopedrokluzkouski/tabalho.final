// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ id, nome, imagem, preco }) {
  return (
    <Link to={`/produto/${id}`} className="product-card-link">
      <div className="product-card">
        <img src={imagem} alt={nome} className="product-image" />
        <h3 className="product-name">{nome}</h3>
        <p className="product-price">R$ {preco}</p>
      </div>
    </Link>
  );
}

export default ProductCard;

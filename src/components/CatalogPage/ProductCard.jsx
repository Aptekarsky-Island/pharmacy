import React from 'react';

export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <h3 className="product-name">{name}</h3>
      <div className="product-price">{price} ₽</div>
      <button className="product-buy-button">Купить</button>
    </div>
  );
}
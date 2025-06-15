import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-container">
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-price">{product.price} ₽</div>
        </div>
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
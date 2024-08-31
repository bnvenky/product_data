import './index.css';

const ProductFilter = ({ filteredProducts, addToCart }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`rating-star ${i <= rating ? 'filled' : ''}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-item">
          {product.id === 0 ? (
            <h2>Product not available</h2>
          ) : (
            <>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <p>{product.id}</p>
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <p>₹{product.price}</p>
              <div className="rating">{renderStars(Math.round(product.rating))}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;

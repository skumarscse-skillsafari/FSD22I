const ProductDetails = ({ otherProps }) => {
  const {
    category,
    rating: { rate, count },
  } = otherProps;
  return (
    <div className="product-details">
      <h2>Product Details Component</h2>
      <p>Product Category: {category}</p>
      <p>Product Rating: {rate}</p>
      <p>Product Count: {count}</p>
      <hr />
    </div>
  );
};

export default ProductDetails;

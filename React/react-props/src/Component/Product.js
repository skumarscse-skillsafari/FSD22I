import ProductDetails from "./ProductDetails";

const Product = ({ product }) => {
  console.log(product);
  const { id, title, description, price, image, ...otherProps } = product;
  return (
    <div className={`product-${id}`}>
      <h2>Product Component</h2>
      <h2>Product Title: {title}</h2>
      <p>Product Description: {description}</p>
      <p>Product Price: {price}</p>
      <p>
        <img src={image} alt={title} height={100} width={100} />
      </p>
      <ProductDetails otherProps={otherProps} />
    </div>
  );
};

export default Product;

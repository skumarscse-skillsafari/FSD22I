import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Product = () => {
  //   console.log(useParams());
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  console.log(product);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h2>Single Product Component</h2>
      <h2>Product Name: {product?.title}</h2>
      <p>Product Description: {product?.description}</p>
      <p>Product Price: {product?.price}</p>
      <p>
        <img
          src={product?.image}
          alt={product?.title}
          height={100}
          width={100}
        />
      </p>
      <p>Product Category: {product?.category}</p>
      <p>Product Rating: {product?.rating?.rate}</p>
      <p>Product Count: {product?.rating?.count}</p>
      <hr />
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default Product;

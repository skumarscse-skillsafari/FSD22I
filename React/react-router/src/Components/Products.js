import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>Products Component</h2>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>Product Name: {product.title}</h2>
            <p>Product Description: {product.description}</p>
            <p>Product Price: {product.price}</p>
            <p>
              <img
                src={product.image}
                alt={product.title}
                height={100}
                width={100}
              />
            </p>
            <Link to={`/products/${product.id}`}>More details...</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Products;

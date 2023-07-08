import { ProductsState } from "../Context/Context";
import Product from "./Product";
import { Link } from "react-router-dom";
const Products = () => {
  console.log(ProductsState());
  const {
    products: { productsArr },
  } = ProductsState();
  return (
    <div>
      <h2>Products Component</h2>
      <Link to="/cart">Go to cart</Link>
      {productsArr.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;

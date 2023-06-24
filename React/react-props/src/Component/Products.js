import Product from "./Product";
import products from "./data";
import { companyName } from "./data";

const Products = () => {
  console.log(products);
  console.log(companyName);
  return (
    <div className="products">
      <h2>Products component</h2>
      <p>Company Name: {companyName}</p>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;

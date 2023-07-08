import { Link } from "react-router-dom";
import { ProductsState } from "../Context/Context";
const Cart = () => {
  console.log(ProductsState());
  const {
    products: { cart },
  } = ProductsState();
  console.log(cart);
  return (
    <div>
      <h2>Cart Component</h2>
      <Link to="/">Back to products</Link>
    </div>
  );
};

export default Cart;

import { CartState } from "../Context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
const Home = () => {
  const {
    state: { products },
    productState: { byRating, byStock, searchQuery, sort, byQuickDelivery },
  } = CartState();
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

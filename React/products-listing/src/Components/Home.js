import { CartState } from "../Context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
const Home = () => {
  const {
    state: { products },
    productState: { byRating, byStock, searchQuery, sort, byQuickDelivery },
  } = CartState();

  const transformProducts = () => {
    let filteredProducts = products;

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);
    }

    if (byQuickDelivery) {
      filteredProducts = filteredProducts.filter((prod) => prod.quickDelivery);
    }

    if (byRating) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.ratings === byRating
      );
    }

    return filteredProducts;
  };
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

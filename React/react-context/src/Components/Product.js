import { ProductsState } from "../Context/Context";
const Product = ({ product }) => {
  const { id, title, description, category, price, image } = product;
  const {
    products: { productsArr, cart },
  } = ProductsState();
  const updateCart = (e, id) => {
    e.preventDefault();
    console.log(id);
    console.log(productsArr);
    cart.push(productsArr.find((p) => p.id === id));
  };
  return (
    <div>
      <h2>{`Product - ${id}`}</h2>
      <p>Product name: {title}</p>
      <p>Product description: {description}</p>
      <p>Product category: {category}</p>
      <p>Product price: {price}</p>
      <p>
        <img src={image} alt={title} height={100} width={100} />
      </p>
      <button onClick={(e) => updateCart(e, id)}>Add to cart</button>
      <hr />
    </div>
  );
};

export default Product;

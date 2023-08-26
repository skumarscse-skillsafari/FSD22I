import express from "express";
import { products, users } from "./data.js";
const app = express();
const PORT = 5000;

app.use(express.json());
// routes
// home page
// req => url
app.get("/", (req, res) => {
  res.status(200).send(`
        <h2>Express JSON</h2>
        <a href="/products">Go to products</a>
  `);
});

// Getting the products
// req => url
app.get("/products", (req, res) => {
  // id, title, price, image, category
  let newProducts = products.map(({ id, title, price, image, category }) => {
    return {
      id,
      title,
      price,
      image,
      category,
    };
  });
  res.status(200).json(newProducts);
});

// Getting the single product
// params
// http://localhost:5000/product/21/rating/2
// req.params => { id: "21", rid: "2" }
// req => url
app.get("/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  //   console.log(id);
  let singleProduct = products.find((product) => product.id === Number(id));
  if (!singleProduct) {
    return res
      .status(200)
      .json({ success: "true", message: `No product with the id ${id}` });
  }
  res.status(200).json(singleProduct);
});

// query
// http://localhost:5000/products?title=mens&limit=5
// req.query => {title: "mens", limit: "5" }
// req => url
app.get("/filtered-products/", (req, res) => {
  //   console.log(req.query);
  const { title, limit } = req.query;
  let filterdProducts = products.filter((product) =>
    product.title.toLowerCase().includes(title)
  );
  if (filterdProducts.length <= 0) {
    return res.status(200).json({ success: "false", message: "No data found" });
  } else {
    let newProducts = filterdProducts.slice(0, Number(limit));
    return res.status(200).json({ success: "true", data: newProducts });
  }
});

// getAllUsers
// req => url
app.get("/users", (req, res) => {
  res.status(200).json({ success: "true", data: users });
});

// getSingleUser
// req => url
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  let singleUser = users.find((user) => user.id === Number(id));
  if (!singleUser) {
    return res
      .status(200)
      .json({ success: "true", message: `No user with the id: ${id}` });
  }
  res.status(200).json({ success: "true", data: singleUser });
});

// POST
// req => url + data => req.body
app.post("/users/create", (req, res) => {
  let newUser = req.body;
  console.log(newUser);
  if (JSON.stringify(newUser) === "{}") {
    return res
      .status(400)
      .json({ success: "false", message: "No data in req.body" });
  } else {
    return res
      .status(201)
      .json({ success: "true", message: "User created successfully" });
  }
});

// PUT
// req => url + data => req.body (updated data)
// params => id
app.put("/users/update/:id", (req, res) => {
  const { id: _id } = req.params;
  const { id, name, age, city } = req.body;
  if (JSON.stringify(req.body) === "{}") {
    return res
      .status(400)
      .json({ success: "false", message: "No data in req.body" });
  } else {
    let copyUsers = [...users];
    let newUser = copyUsers.find((user) => user.id === Number(_id));
    if (!newUser) {
      return res
        .status(400)
        .json({ success: "false", message: `No user with the id: ${_id}` });
    } else {
      let updatedUsers = copyUsers.map((user) => {
        if (user.id === Number(_id)) {
          return {
            id: id,
            name: name,
            age: age,
            city: city,
          };
        } else {
          return user;
        }
      });
      return res.status(201).json({ success: "true", data: updatedUsers });
    }
  }
});

// Delete
// req => url
// params => id
app.delete("/users/delete/:id", (req, res) => {
  const { id } = req.params;
  let findUser = users.find((user) => user.id === Number(id));
  if (!findUser) {
    return res
      .status(400)
      .json({ success: "false", message: `No user with the id: ${id}` });
  } else {
    let updatedUser = users.filter((user) => user.id !== Number(id));
    return res.status(200).json({ success: "true", data: updatedUser });
  }
});

// listen
app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);

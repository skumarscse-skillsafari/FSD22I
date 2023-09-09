import express from "express";
const PORT = 5000;
let app = express();

// Middleware
// client <=> middleware <=> server
// Middleware => function => req object, res object, next() function

// Syntax
// app.httpMethod("route", "middleware", (req, res) => {....})
// 1. Add more than one middleware to one or more routes
// 2. Add different middlewares for different routes
// 3. Add common middleware for all the routes

// simple middleware
const demoMiddleware = (req, res, next) => {
  console.log("Hello from middleware");
  next();
};

const demoMiddlewareOne = (req, res, next) => {
  console.log("Hello from middlewareOne");
  next();
};

const commonMiddleware = (req, res, next) => {
  console.log("This is common middleware");
  next();
};

// app.use(commonMiddleware);

// app.get("/", [demoMiddleware, demoMiddlewareOne], (req, res) => {
//   res.send("<h1>Hello Middleware...</h1>");
// });

// app.get("/demo", demoMiddlewareOne, (req, res) => {
//   res.send("<h1>This is from demo endpoint</h1>");
// });

const verifyUser = (req, res, next) => {
  const { username } = req.query;
  if (username === "john") {
    req.city = "Chennai";
    next();
  } else {
    const { username } = req.query;
    return res.status(400).send(`<h1>Unauthorized user, ${username}</h1>`);
  }
};

// Middleware for authentication
app.get("/auth", verifyUser, (req, res) => {
  //   console.log(req);
  const { username } = req.query;
  const { city } = req;
  res
    .status(200)
    .send(`<h1>Welcome, ${username.toUpperCase()} from ${city}<h1>`);
});

app.listen(PORT, () => {
  console.log(`The server is running in: http://localhost:${PORT}`);
});

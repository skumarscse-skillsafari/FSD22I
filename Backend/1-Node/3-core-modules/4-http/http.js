const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  // "/" => http://localhost:5000
  // "/about" => http://localhost:5000/about
  // "/products/23" => http://localhost:5000/products/23

  if (req.url === "/") {
    res.end("<h1>Welcome to HTTP node core module</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About page</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact page</h1>");
  } else {
    res.end(`
        <h1>Something went wrong<h1>
        <a href="/">Back to home page</a>
    `);
  }
});

server.listen(PORT, () =>
  console.log("Server is running in: http://localhost:5000")
);

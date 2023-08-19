const http = require("http");
const PORT = 5000;

// Req => Res
// Req (client => browser => url) => Res (Server)
const server = http.createServer((req, res) => {
  // req => http://localhost:5000
  // res => <h1>Welcome to the session on http-basics</h1>
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the session on http-basics</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Projects Page</h1>");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`
    <h1>Something went wrong</h1>
    <a href="/">Back to home page</a>
    `);
    res.end();
  }
});

server.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);

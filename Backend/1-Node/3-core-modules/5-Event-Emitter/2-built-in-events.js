const http = require("http");

const PORT = 5000;

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("<h1>Hello...</h1>");
});

server.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);

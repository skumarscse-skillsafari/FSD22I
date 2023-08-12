const { createReadStream, readFileSync } = require("fs");
const http = require("http");

// const server = http.createServer((req, res) => {
//   let content = readFileSync("./big-file.txt", "utf-8");
//   res.end(content);
// });

const server = http.createServer((req, res) => {
  const stream = createReadStream(
    "./big-file.txt",
    { encoding: "utf-8" },
    { highWaterMark: 5000 }
  );

  stream.on("open", () => {
    stream.pipe(res);
  });
});

server.listen(5000, () =>
  console.log("Server is running in: http://localhost:5000")
);

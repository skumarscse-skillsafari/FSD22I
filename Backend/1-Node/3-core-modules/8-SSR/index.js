const { createServer } = require("http"); // createServer
const { readFileSync } = require("fs"); // readFileSync

const PORT = 5000;

const htmlFile = readFileSync("./Course-Website/index.html", "utf-8");
const cssFile = readFileSync("./Course-Website/css/style.css", "utf-8");
const jsFile = readFileSync("./Course-Website/js/index.js", "utf-8");
const img1 = readFileSync("./Course-Website/images/app-store.png", "utf-8");
const img2 = readFileSync("./Course-Website/images/download-app.png", "utf-8");
const img3 = readFileSync("./Course-Website/images/google-play.png", "utf-8");
const img4 = readFileSync("./Course-Website/images/header-shape.svg", "utf-8");
const img5 = readFileSync("./Course-Website/images/hero-image.svg", "utf-8");
const img6 = readFileSync("./Course-Website/images/person-1.jpg", "utf-8");
const img7 = readFileSync("./Course-Website/images/person-2.jpg", "utf-8");
const img8 = readFileSync("./Course-Website/images/photography.jpg", "utf-8");
const img9 = readFileSync("./Course-Website/images/public.jpg", "utf-8");
const img10 = readFileSync(
  "./Course-Website/images/testimonial-bg.jpg",
  "utf-8"
);
const img11 = readFileSync("./Course-Website/images/typing.jpg", "utf-8");

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlFile);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(cssFile);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(jsFile);
    res.end();
  } else if (req.url === "/images/header-shape.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(img4);
    res.end();
  }
});

server.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);

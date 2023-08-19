import express from "express";
const app = express();
const PORT = 5000;

// SSR
// Middleware
app.use(express.static("./Course-Website"));

// routes
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome</h1>");
});

app.get("*", (req, res) => {
  res
    .status(404)
    .send(`<h1>Something went wrong</h1> <a href="/">Back to home page</>`);
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);

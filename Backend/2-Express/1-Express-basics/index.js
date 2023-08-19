// const express = require("express");
import express from "express";
const app = express();
const PORT = 5000;

// routes
// req => res
// Syntax
// app.httpMethod("url", callback)
app.get("/", (req, res) => {
  res.send("<h1>This is my first express application</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This about page</h1>");
});

app.get("/projects", (req, res) => {
  res.send("<h1>This is projects page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is contact page</h1>");
});

app.get("*", (req, res) => {
  res.send(`<h1>Something went wrong</h1> <a href="/">Back to home page</a>`);
});

// HTTP METHODS => CRUD
// 1. GET => Read (Server / database)
// 2. POST => Create
// 3. PUT / PATCH => Update
// 4. DELETE => Delete

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);

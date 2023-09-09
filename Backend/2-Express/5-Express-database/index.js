import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome, Express database</h1>");
});

app.use("/api/v1", userRoutes); // http://localhost:5000/api/v1/create

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running in: http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));

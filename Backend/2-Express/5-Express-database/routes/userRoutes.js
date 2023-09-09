import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";
const router = express.Router();

// Create
router.post("/create", createUser);
// Read
router.get("/user", getUsers);
router.get("/user/:id", getUser);
// Update
router.put("/user/edit/:id", updateUser);
// Delete
router.delete("/user/delete/:id", deleteUser);

export default router;

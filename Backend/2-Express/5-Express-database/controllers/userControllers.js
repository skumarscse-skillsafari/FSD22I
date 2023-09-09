import User from "../models/userModel.js";

export const createUser = (req, res) => {
  //   const { name, age, city } = req.body;
  //   console.log(req.body);
  //   console.log(name);
  //   console.log(age);
  //   console.log(city);
  new User(req.body)
    .save()
    .then(() =>
      res
        .status(201)
        .json({ success: true, message: "User created successfully" })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

export const getUsers = (req, res) => {
  res.send("<h1>Read Users</h1>");
};

export const getUser = (req, res) => {
  res.send("<h1>Read User</h1>");
};

export const updateUser = (req, res) => {
  res.send("<h1>Update User</h1>");
};

export const deleteUser = (req, res) => {
  res.send("<h1>Delete User</h1>");
};

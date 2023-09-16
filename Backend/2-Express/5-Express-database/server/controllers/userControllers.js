import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  //   const { name, age, city } = req.body;
  //   console.log(req.body);
  //   console.log(name);
  //   console.log(age);
  //   console.log(city);
  await new User(req.body)
    .save()
    .then(() =>
      res
        .status(201)
        .json({ success: true, message: "User created successfully" })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

export const getUsers = async (req, res) => {
  await User.find()
    .then((users) => res.status(200).json({ success: true, usersData: users }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  await User.findById(id)
    .then((user) => res.status(200).json({ success: true, usersData: user }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, city } = req.body;
  await User.findByIdAndUpdate(id, {
    name: name,
    age: age,
    city: city,
  })
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "User updated successfully" })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndRemove(id)
    .then(() =>
      res.status(200).json({
        success: true,
        message: `User with id: ${id} deleted successfully`,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

const User = require("../models/user.model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    //await is required
    const user = await User.findById(id).select("-password");
    if (!user) {
      const error = new Error("User not found");
      error.statusCode(404);
      throw error;
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getUserById };

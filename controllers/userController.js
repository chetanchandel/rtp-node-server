// userController.js
const userModel = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  try {
    const users = userModel.getUsers(); // Getting users from the model
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching users'
    });
  }
};

const User = require('../models/user'); // Adjust the path as necessary

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// You can add more user-related functions here

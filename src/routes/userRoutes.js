const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Adjust the path as necessary

// Define routes
router.get('/', (req, res) => res.send('User route'));

// Route to create a new user
router.post('/', userController.createUser);

module.exports = router;

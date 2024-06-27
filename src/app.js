const express = require('express');
const bodyParser = require('body-parser');

// Import routers
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');


// Initialize the Express application
const app = express();

// Middleware
app.use(bodyParser.json());  // For parsing application/json

// Use routes
app.use('/users', userRouter);
app.use('/posts', postRouter);

// Define a sample route for testing if the server is running
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Export the app for use in other files
module.exports = app;

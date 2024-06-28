const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Adjust the path as necessary

// Import routers
// const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');


// Initialize the Express application
const app = express();

// Middleware
app.use(bodyParser.json());  // For parsing application/json

app.use(express.json()); // Built-in middleware to parse JSON bodies
app.use(userRoutes);     // Your custom router


// Use routes
// app.use('/users', userRoutes);
// app.use('/posts', postRoutes);
//app.use('/comments', commentRoutes);

// Define a sample route for testing if the server is running
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Export the app for use in other files
module.exports = app;

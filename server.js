const express = require('express');
const mongoose = require('mongoose');
const app = require('./src/app');  // Importing the Express application

// MongoDB connection URL
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://hiwotkebede26:Rohisaze21182415!@mongopractice.1ulybhw.mongodb.net/?retryWrites=true&w=majority&appName=MongoPractice';

// Connecting to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

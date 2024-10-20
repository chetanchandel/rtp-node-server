// app.js
const config = require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const { port } = require('./config/config');
const mongoURI = config.mongouri || 'mongodb://127.0.0.1:27017/mydatabase';

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME;

// Middleware to handle JSON data
app.use(express.json());

// Register the user routes
app.use('/api', userRoutes);

app.use((req, res) => {
    res.status(404).json({status:404});
});

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

app.listen(port, () => {
  console.log(`Server running on ${config.port} ${config.hostname}`);
});

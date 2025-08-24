// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const notificationRoutes = require('./routes/notifications');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/notifications', notificationRoutes);

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
});

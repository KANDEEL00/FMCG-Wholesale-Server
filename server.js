require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./Routes/orders')
const catalogRoutes = require('./Routes/catalogs')
const invoiceRoutes = require('./Routes/invoices')
const skuRoutes = require('./Routes/products')


// express app
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use('/api/orders', orderRoutes);
app.use('/api/catalogs', catalogRoutes);
app.use('/api/products', skuRoutes);
app.use('/api/invoices', invoiceRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// Listening on localhost:4000
app.listen(4000, () => {
    console.log("Server running on port 4000");
});

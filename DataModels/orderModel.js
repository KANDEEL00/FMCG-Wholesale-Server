const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  Organization_ID: {
    type: String,
    required: true,
    description: 'Organization ID - Foreign Key'
  },
  User_Email: {
    type: String,
    required: true,
    description: 'User Email - Foreign Key'
  },
  Organization_Name: {
    type: String,
    required: true,
    description: 'Organization Name - Text'
  },
  Order_ID: {
    type: String,
    required: true,
    unique: true,
    description: 'Order ID - Unique ID'
  },
  Order_Date: {
    type: Date,
    required: true,
    description: 'Order Date - Date and Time'
  },
  Username: {
    type: String,
    required: true,
    description: 'Username - Text'
  },
  Order_Amount: {
    type: mongoose.Decimal128,
    required: true,
    description: 'Order Amount - Currency'
  },
  Paid: {
    type: [String],
    required: true,
    description: 'Paid - Array'
  },
  Payment_Reference: {
    type: String,
    required: true,
    description: 'Payment Reference - Foreign Key'
  },
  Paid_Amount: {
    type: mongoose.Decimal128,
    required: true,
    description: 'Paid Amount - Currency'
  },
  Remaining_amount: {
    type: mongoose.Decimal128,
    description: 'Remaining Amount - Currency'
  },
  Items_COUNT: {
    type: Number,
    required: true,
    description: 'Items COUNT - Double'
  },
  SKUs: {
    type: [String],
    required: true,
    description: 'SKUs - Array'
  },
  SKU: {
    type: String,
    required: true,
    description: 'SKU - Foreign Key'
  },
  SKU_count: {
    type: Number,
    description: 'SKU Count'
  },
  SKU_Name: {
    type: String,
    required: true,
    description: 'SKU Name - Text'
  },
  SKU_Price: {
    type: mongoose.Decimal128,
    required: true,
    description: 'SKU Price - Currency'
  },
  Received: {
    type: Buffer,
    description: 'Received - Binary'
  },
  Receive_time: {
    type: Date,
    required: true,
    description: 'Receive Time - Required Date and Time'
  }
});

const Order = mongoose.model('Orders', orderSchema, 'Orders');

module.exports = Order;

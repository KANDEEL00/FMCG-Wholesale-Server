const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  Department_ID: {
    type: String,
    required: true,
    description: 'Inventory Department ID - Foreign Key'
  },
  Worker_ID: {
    type: String,
    unique: true,
    required: true,
    description: 'Inventory Worker ID - Unique ID'
  },
  Worker_Name: {
    type: String,
    required: true,
    description: 'Inventory Worker Name - String'
  },
  Worker_Role: {
    type: [String],
    required: true,
    description: 'Inventory Worker Role - Array'
  },
  Mobile_Number: {
    type: String,
    required: true,
    description: 'Inventory Worker Mobile Number - Special',
    match: /^\+?[0-9]{1,}$/,
    // Additional validation using regular expression for mobile number format
  }
});

const Worker = mongoose.model('InventoryWorkers', workerSchema,'InventoryWorkers');

module.exports = Worker;

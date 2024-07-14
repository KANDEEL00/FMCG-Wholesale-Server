const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  Department_ID: {
    type: String,
    required: true,
    description: 'Inventory Department ID - Foreign Key'
  },
  Worker_ID: {
    type: String,
    required: true,
    unique: true,
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
  }
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;

const mongoose = require('mongoose');

const inventoryDepartmentSchema = new mongoose.Schema({
  Organization_ID: {
    type: String,
    required: true,
    description: 'Organization ID - Foreign Key'
  },
  Inventory_ID: {
    type: String,
    unique: true,
    required: true,
    description: 'Inventory ID - Unique ID'
  },
  Inventory_Name: {
    type: String,
    required: true,
    description: 'Inventory Name - String'
  },
  Inventory_Location: {
    type: {
      longitude: {
        type: Number,
        required: true,
        description: 'Longitude'
      },
      latitude: {
        type: Number,
        required: true,
        description: 'Latitude'
      }
    },
    description: 'Inventory Location - Long & Lat'
  },
  Department_ID: {
    type: String,
    required: true,
    description: 'Inventory Department ID - Unique ID'
  },
  Department_Name: {
    type: String,
    required: true,
    description: 'Inventory Department Name - String'
  }
});

const Inventory = mongoose.model('InventoryDepartments', inventoryDepartmentSchema,'InventoryDepartments');

module.exports = Inventory;

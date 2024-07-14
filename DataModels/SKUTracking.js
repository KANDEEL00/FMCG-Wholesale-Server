const mongoose = require('mongoose');

const inventoryItemSchema = new mongoose.Schema({
  Inventory_Department_ID: {
    type: String,
    description: 'Inventory Department ID - Foreign Key'
  },
  Inventory_Department_Name: {
    type: String,
    description: 'Inventory Department Name'
  },
  Inventory_Worker_ID: {
    type: String,
    description: 'Inventory Worker ID'
  },
  Inventory_Worker_Name: {
    type: String,
    description: 'Inventory Worker Name'
  },
  Brand_ID: {
    type: String,
    description: 'Brand ID - Foreign Key'
  },
  Brand_Name: {
    type: String,
    description: 'Brand Name - Text'
  },
  SKU: {
    type: String,
    description: 'SKU - Foreign Key'
  },
  SKU_Name: {
    type: String,
    description: 'SKU Name'
  },
  Catalog_ID: {
    type: String,
    description: 'Catalog ID'
  },
  Sub_Category_ID: {
    type: String,
    description: 'Sub-Category ID'
  },
  Sub_Category_Name: {
    type: String,
    description: 'Sub-Category Name'
  },
  SKU_Balance: {
    type: Number,
    description: 'SKU Balance - Integer'
  }
});

const InventoryItem = mongoose.model('SKUTracking', inventoryItemSchema,'SKUTracking');

module.exports = InventoryItem;

const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  Organization_ID: {
    type: String,
    required: true,
    description: 'Organization ID - Foreign Key.',
    minLength: 1
  },
  Catalog_ID: {
    type: String,
    required: true,
    unique: true,
    description: 'Catalog ID - Unique ID.',
    minLength: 1
  },
  Catalog_Name: {
    type: String,
    required: true,
    description: 'Catalog Name.',
    minLength: 1
  },
  Category_ID: {
    type: String,
    required: true,
    description: 'Category ID.',
    minLength: 1
  },
  Category_Name: {
    type: String,
    required: true,
    description: 'Category Name.',
    minLength: 1
  },
  Sub_Category_ID: {
    type: String,
    required: true,
    description: 'Sub-Category ID.',
    minLength: 1
  },
  Sub_Category_Name: {
    type: String,
    required: true,
    description: 'Sub-Category Name.',
    minLength: 1
  },
  Active_Catalog: {
    type: Buffer,
    required: true,
    description: 'Active Catalog - Binary.',
    minLength: 1
  }
});

const Catalog = mongoose.model('Catalog', catalogSchema,'Catalog');

module.exports = Catalog;

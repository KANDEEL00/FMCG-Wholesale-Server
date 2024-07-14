const mongoose = require('mongoose');

const skuSchema = new mongoose.Schema({
  Brand_ID: {
    type: String,
    required: true,
    description: 'Brand ID - Foreign Key.',
    minLength: 1
  },
  Brand_name: {
    type: String,
    required: true,
    description: 'Brand name - Text.',
    minLength: 1
  },
  SKU: {
    type: String,
    required: true,
    unique: true,
    description: 'SKU - Unique ID.',
    minLength: 1
  },
  SKU_name: {
    type: String,
    required: true,
    description: 'SKU name - Text.',
    minLength: 1
  },
  SKU_description: {
    type: String,
    required: true,
    description: 'SKU description - Paragraph.',
    minLength: 1
  },
  SKU_cost: {
    type: mongoose.Decimal128,
    required: true,
    description: 'SKU cost - Currency.',
    minLength: 1
  },
  SKU_Price: {
    type: mongoose.Decimal128,
    required: true,
    description: 'SKU Price - Currency.',
    minLength: 1
  },
  SKU_extended_price_1: {
    type: mongoose.Decimal128,
    required: true,
    description: 'SKU extended price 1 - Currency.',
    minLength: 1
  },
  SKU_extended_price_2: {
    type: mongoose.Decimal128,
    required: true,
    description: 'SKU extended price 2 - Currency.',
    minLength: 1
  },
  Active_SKU: {
    type: Buffer,
    required: true,
    description: 'Active SKU - Binary.',
    minLength: 1
  }
});

const SKU = mongoose.model('SKU', skuSchema,'SKU');

module.exports = SKU;

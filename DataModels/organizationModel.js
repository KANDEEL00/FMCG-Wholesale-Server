const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  Organization_ID: {
    type: String,
    required: true,
    description: 'Organization ID - Required.'
  },
  License_ID: {
    type: String,
    required: true,
    description: 'License ID - Required.'
  },
  Org_Status: {
    type: Boolean,
    required: true,
    description: 'Organization Status - Required.'
  },
  Organization_Type: {
    type: [String],
    required: true,
    description: 'Organization Type - Required.'
  },
  Organization_Name: {
    type: String,
    required: true,
    description: 'Organization Name - Required.'
  },
  Organization_Financial_ID: {
    type: String,
    description: 'Organization Financial ID - Optional.'
  },
  Financial_Limit_From: {
    type: mongoose.Decimal128,
    description: 'Financial Limit From - Optional.'
  },
  Financial_Limit_To: {
    type: mongoose.Decimal128,
    description: 'Financial Limit To - Optional.'
  },
  Bank_Account: {
    type: Number,
    description: 'Bank Account - Optional.'
  },
  Organization_Attachments: {
    type: String,
    description: 'Organization Attachments - Optional.'
  }
});

const Organization = mongoose.model('Organization', organizationSchema,'Organization');

module.exports = Organization;

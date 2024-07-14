const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  Payment_Reference: {
    type: String,
    required: true,
    unique: true,
    description: 'Payment Reference - Unique ID'
  },
  Payment_Option: {
    type: Boolean,
    required: true,
    description: 'Payment Option - Boolean'
  },
  Invoice_Date: {
    type: Date,
    required: true,
    description: 'Invoice Date - Date and Time'
  },
  Invoice_Amount: {
    type: mongoose.Decimal128,
    required: true,
    description: 'Invoice Amount - Currency'
  },
  Organization_ID: {
    type: String,
    required: true,
    description: 'Organization ID - Foreign Key'
  },
  Organization_Name: {
    type: String,
    required: true,
    description: 'Organization Name - Text'
  },
  Order_ID: {
    type: String,
    required: true,
    description: 'Order ID - Foreign Key'
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
  }
});

const Invoice = mongoose.model('Invoices', invoiceSchema,'Invoices');

module.exports = Invoice;

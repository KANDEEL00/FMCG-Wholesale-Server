const express = require('express');
const router = express.Router();
const {
  getInvoice,
  createInvoice,
  getAllInvoices
} = require('../Controllers/invoiceController');

router.get('/:paymentReference', getInvoice);
router.get('/', getAllInvoices);
router.post('/', createInvoice);

module.exports = router;

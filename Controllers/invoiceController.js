const Invoice = require("../DataModels/invoiceModel");

// Get a specific invoice by ID
const getInvoice = async (req, res) => {
  try {
    const { paymentReference } = req.params;
    const invoice = await Invoice.findOne({
      Payment_Reference: paymentReference,
    });
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    return res.status(200).json(invoice);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get all invoices
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    return res.status(200).json(invoices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new invoice
const createInvoice = async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (error) {
    console.error("Error saving invoice:", error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getInvoice,
  getAllInvoices,
  createInvoice,
};

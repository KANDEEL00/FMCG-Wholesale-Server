const Product = require('../DataModels/SKUModel');

// Get a specific product by SKU ID
const getProduct = async (req, res) => {
  try {
    const { skuId } = req.params;
    const product = await Product.findOne({ SKU: skuId });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getProduct,
  getAllProducts,
  createProduct
};

const express = require('express');
const router = express.Router();
const {
  getProduct,
  createProduct,
  getAllProducts
} = require('../Controllers/productController');

router.get('/:skuId', getProduct);
router.get('/', getAllProducts);
router.post('/', createProduct);

module.exports = router;

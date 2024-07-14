const express = require('express');
const router = express.Router();
const {
  getCatalog,
  createCatalog,
  getAllCatalogs
} = require('../Controllers/catalogController');

router.get('/:catalogId', getCatalog);
router.get('/', getAllCatalogs);
router.post('/', createCatalog);

module.exports = router;

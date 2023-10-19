const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const priceController = require('../controllers/priceController');

router.get('/products', productController.getProducts)

router.get('/price/:user_id/:nombre_producto', priceController.getPrice)

module.exports = router;
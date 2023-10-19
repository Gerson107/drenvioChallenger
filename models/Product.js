const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  basePrice: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;


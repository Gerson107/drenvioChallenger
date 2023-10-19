const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  specialPrices: [
    {
      brand: String,
      price: Number,
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

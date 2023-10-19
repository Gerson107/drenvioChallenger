const User = require('../models/User');
const Product = require('../models/Product')

exports.getPriceForUserAndProduct = async (user_id, productName) => {
    const user = await User.findById(user_id);
    const product = await Product.findOne({ name: productName });

    if (!user || !product) { 
        return null;
    }

    const specialPrice = user.specialPrices.find(sp => sp.brand === product.brand);
    return specialPrice ? specialPrice.price : product.basePrice;
};
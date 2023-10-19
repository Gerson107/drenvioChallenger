const productServices = require("../services/productService");

exports.getProducts = async (req, res) => {
    try {
        const products = await productServices.getProductsInStock();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

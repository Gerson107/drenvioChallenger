const priceService = require('../services/priceService');

exports.getPrice = async (req, res, next) => {
    const { user_id, nombre_producto } = req.params;

    try {
        const price = await priceService.getPriceForUserAndProduct(user_id, nombre_producto);
        res.json({ price });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
const { TrackedProducts, PriceTracker } = require("../models");
const trackedProducts = require("../models/trackedProducts");

module.exports = {
  getChartData: async (req, res, next) => {
    const { tag } = req.params;

    const trackedProducts = await TrackedProducts.findAll({
      where: { productTag: tag },
    });
    const productPriceHistory = await PriceTracker.findAll({
      where: { productTag: tag },
    });

    res.json({ trackedProducts, productPriceHistory });
  },
};

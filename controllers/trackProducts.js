const { TrackedProducts } = require("../models");
module.exports = {
  trackProduct: async (req, res, next) => {
    console.log(req.body);

    const product = req.body;
    await TrackedProducts.create(product);
    res.json(product);
  },

  getAllTrackedProducts: async (req, res, next) => {
    const AllProductsList = await TrackedProducts.findAll();
    let object = {};
    let AllProductsListWithOnlyOneOccurance = [];
    for (i of AllProductsList) {
      object[i.productLink] = i;
    }
    Object.keys(object).forEach((k) => {
      AllProductsListWithOnlyOneOccurance.push(object[k]);
    });
    res.json(AllProductsList);
  },
};

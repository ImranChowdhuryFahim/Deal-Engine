const { TrackedProducts, PriceTracker } = require("../models");
const cron = require("node-cron");
const scraper = require("../Scraper/scraper");
const productDetailsModel = require("../websiteModel/productDetailsModel");
const url_taskMap = {};
module.exports = {
  trackProduct: async (req, res, next) => {
    console.log(req.body);

    const product = req.body;

    alreadyExist = await TrackedProducts.findOne({
      where: { productLink: product.productLink },
    });

    if (alreadyExist) {
      return res.status(500).json({ message: "already exist" });
    }
    TrackedProducts.create(product)
      .then(() => {})
      .catch((err) => {});
    let task = await cron.schedule("*/2 * * * *", async () => {
      let productDetails = await scraper.detailsScraper(
        productDetailsModel[product.websiteName],
        product.productLink,
        product.websiteLink,
        product.websiteName
      );
      console.log(productDetails)
      let priceTracker = {
        productLink: product.productLink,
        productPrice: parseFloat(
          productDetails.sellPrice
            ? productDetails.sellPrice
            : productDetails.regularPrice
        ),
        productTag: product.productTag,
      };
      PriceTracker.create(priceTracker)
        .then(() => {
          console.log("tracking....");
        })
        .catch((err) => {
          console.log(err);
        });
    });
    url_taskMap[req.body.productLink] = task;
    res.status(200).json({ message: "successfully added the product" });
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
    console.log(AllProductsList);
    res.status(200).json(AllProductsList);
  },

  deleteTrackedProduct: async (req, res, next) => {
    const { productLink } = req.body;

    let job = url_taskMap[productLink];
    if (job) job.stop();

    await TrackedProducts.destroy({ where: { productLink } });
    await PriceTracker.destroy({ where: { productLink } });
    res.status(200).json({ message: "successfully deleted" });
  },
};

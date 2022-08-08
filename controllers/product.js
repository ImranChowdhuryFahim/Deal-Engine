const { Products, URLs } = require("../models");
const multer = require("multer");
const path = require("path");

module.exports = {
  add: async (req, res, next) => {
    const product = req.body;

    let productAlreadyExist = await Products.findOne({
      where: {
        productTitle: product.productTitle,
      },
    });

    let ulrAlreadyExist = await URLs.findOne({
      where: {
        url: product.urlList,
      },
    });

    if (productAlreadyExist) {
      console.log(productAlreadyExist);
      return res.status(500).json({ message: "product already exist" });
    }
    if (ulrAlreadyExist) {
      console.log(ulrAlreadyExist);
      return res.status(500).json({ message: "url already exist" });
    }

    let urls = product.productUrls;
    delete product.productUrls;
    delete product.productUrlList;

    const new_product = await Products.create(product);

    let productId = new_product.productId;
    for (i of urls) {
      i.productId = productId;
    }

    await URLs.bulkCreate(urls, { ignoreDuplicates: true })
      .then(() => {
        console.log("urls....");
      })
      .catch((err) => {
        console.log(err);
      });

    res.status(200).json({ message: "successfully added the product" });
  },
  getAllProducts: async (req, res, next) => {
    let products = await Products.findAll().catch((err) => {
      res.status(400).json(err);
    });

    res.status(200).json(products);
  },
};

const puppeteer = require("puppeteer");
const websiteModel = require("../websiteModel/websiteModel");
const productDetailsModel = require("../websiteModel/productDetailsModel");
const scraper = require("../Scraper/scraper");

module.exports = {
  getSearchResult: async (req, res, next) => {
    const { keyword, websiteName } = req.query;
    let totalProductlist = [];

    totalProductlist = await scraper.listScraper(websiteModel[websiteName], keyword);

    res.json({ totalProductlist: totalProductlist });
  },
  getProductDetails: async (req, res, next) => {
    const { productLink, websiteName, websiteLink } = req.query;
    console.log(productDetailsModel[websiteName],
      productLink,
      websiteLink,
      websiteName)
    const productDetails = await scraper.detailsScraper(
      productDetailsModel[websiteName],
      productLink,
      websiteLink,
      websiteName
    );
    res.send(productDetails);
  },

  index: (req, res, next) => {
    res.json({ message: "welcome to deal engine" });
  },
};

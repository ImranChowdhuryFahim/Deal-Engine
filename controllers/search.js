const puppeteer = require("puppeteer");
const websiteModel = require("../models/websiteModel");

module.exports = {
  getSearchResult: (req, res, next) => {
    let from = req.query.from;
    let keyword = req.query.keyword;

    async function searchAll() {
      const browser = await puppeteer.launch();
      let totalProductlist = [];

      let pagePromise = (obj,keyword) =>
        new Promise(async (resolve, reject) => {
          const page = await browser.newPage();
          await page.goto(obj.websiteLink + keyword);
          let productslist= await page.evaluate((obj) => {
                    let list = document.querySelectorAll(obj.productDetails);
                    let productList = [];
                    for (i of list) {
                      let a = {
                        websiteName: obj.websiteName,
                        href: i.getElementsByClassName(obj.linkTag)[0].href,
                        image: i.getElementsByClassName(obj.imageTag)[0].src,
                        title: i.getElementsByClassName(obj.titleTag)[0].innerText,
                      };
                      if (i.getElementsByClassName(obj.priceTag).length != 0) {
                        a["price"] = i.getElementsByClassName(obj.priceTag)[0].innerText;
                      } else {
                        a["price"] = null;
                      }
                      productList.push(a);
                    }
                    return productList;
                  }, obj)
          resolve(productslist)
          await page.close()
        });

      for (obj of websiteModel.websiteModel) {
        let newList = await pagePromise(obj,keyword)
        totalProductlist = totalProductlist.concat(newList)
      }
      console.log(totalProductlist)
      res.send(await JSON.stringify(totalProductlist));
      await browser.close();
    }
    searchAll();
  },
};


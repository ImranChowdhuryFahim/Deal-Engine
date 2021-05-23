const puppeteer = require("puppeteer");
const websiteModel = require("../websiteModel/websiteModel");

module.exports = {
  getSearchResult: (req, res, next) => {
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
                    let lnk, img, ttl;
                    for (i of list) {
                      try {
                        lnk = i.getElementsByClassName(obj.linkTag)[0].href;
                      } catch (error) {
                        lnk = "No link!";
                      }
                      try {
                        img = i.getElementsByTagName(obj.imageTag)[0].src;
                      } catch (error) {
                        img = "No Image";
                      }
                      try {
                        ttl = i.getElementsByClassName(obj.titleTag)[0]
                          .innerText;
                      } catch (error) {
                        ttl = "No title";
                      }
                      let a = {
                        websiteName: obj.websiteName,
                        href: lnk,
                        image: img,
                        title: ttl,
                      };
                      if (i.getElementsByClassName(obj.priceTag).length != 0) {
                        a["price"] = parseFloat(
                          i
                            .getElementsByClassName(obj.priceTag)[0]
                            .innerText.replace("$", "")
                        );
                        
                      } else {
                        a["price"] = null;
                      }
                      productList.push(a);
                    }
                    return productList;
                  }, obj)
          resolve(productslist)
          reject([])
          await page.close()
        });

      for (obj of websiteModel.websiteModel) {
        let newList = await pagePromise(obj,keyword)
        totalProductlist = totalProductlist.concat(newList)
      }
      console.log(totalProductlist)
      res.json({totalProductlist: await totalProductlist})
      await browser.close();
    }
    searchAll();
  },

  index: (req,res,next) => {
       res.json({message:"welcome to deal engine"})
  },
};


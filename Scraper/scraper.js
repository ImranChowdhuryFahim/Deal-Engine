const puppeteer = require("puppeteer");
module.exports = {
  listScraper: async (obj, keyword) => {
    const browser = await puppeteer.launch();
    return new Promise(async (resolve, reject) => {
      const page = await browser.newPage();
      await page.goto(obj.websiteLink + keyword + obj.suffix);
      const productslist = await page.evaluate((obj) => {
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
            ttl = i.getElementsByClassName(obj.titleTag)[0].innerText;
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
                .replace("US", "")
                .replace("AU", "")
            );
          } else {
            a["price"] = null;
          }
          productList.push(a);
        }
        return productList;
      }, obj);
      resolve(productslist);
      reject([]);
      await page.close();
    });
  },
  detailsScraper: async (obj, productLink, websiteLink, websiteName) => {
    const browser = await puppeteer.launch();
    return new Promise(async (resolve, reject) => {
      const page = await browser.newPage();
      await page.goto(productLink);
      const productDetails = await page.evaluate(
        (obj, productLink, websiteLink, websiteName) => {
          let productName,
            productUrl,
            regularPrice,
            sellPrice,
            productDescription,
            productShortDescription,
            images = [],
            websiteUrl;
          let imageNodeList;
          try {
            productName = document.querySelector(obj.productName).innerText;
          } catch (error) {
            productName = null;
          }
          productUrl = productLink;

          try {
            regularPrice = document
              .querySelector(obj.regularPrice)
              .innerText.replace("$", "")
              .replace("US", "")
              .replace("AU", "")
              .replace(" ", "");
          } catch (error) {
            regularPrice = null;
          }
          try {
            sellPrice = document
              .querySelector(obj.sellPrice)
              .innerText.replace("$", "")
              .replace("US", "")
              .replace("AU", "")
              .replace(" ", "");
          } catch (error) {
            sellPrice = null;
          }
          try {
            productDescription = document.querySelector(
              obj.productDescription
            ).innerText;
          } catch (error) {
            productDescription = null;
          }
          try {
            productShortDescription = document.querySelector(
              obj.productShortDescription
            ).innerText;
          } catch (error) {
            productShortDescription = null;
          }

          try {
            imageNodeList = document.querySelectorAll(obj.images);
          } catch (error) {
            imageNodeList = null;
          }

          if (imageNodeList) {
            for (let i of imageNodeList) {
              images.push(i.src);
            }
          }

          websiteUrl = websiteLink;

          return {
            productName,
            productUrl,
            regularPrice,
            sellPrice,
            productDescription,
            productShortDescription,
            images,
            websiteName,
            websiteUrl,
          };
        },
        obj,
        productLink,
        websiteLink,
        websiteName
      );
      resolve(productDetails);
      reject({});
      await page.close();
      await browser.close();
    });
  },
};

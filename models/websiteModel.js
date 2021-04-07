module.exports = {
  websiteModel: [
    {
      websiteName: "amazon",
      websiteLink: `https://www.amazon.com/s?k=`,
      productDetails: 'div[class="a-section a-spacing-medium"]',
      linkTag: "a-link-normal s-no-outline",
      imageTag: "img",
      priceTag: "a-offscreen",
      titleTag: "a-size-medium a-color-base a-text-normal",
    },
    {
      websiteName: "bigw",
      websiteLink: "https://www.bigw.com.au/search?text=",
      productDetails: 'div[class="ProductTile"]',
      linkTag: "product-image",
      imageTag: "img",
      priceTag: "dollars",
      titleTag: "product-name",
    },
    {
      websiteName: "jbhifi",
      websiteLink: "https://www.jbhifi.com.au/?query=",
      productDetails: 'div[class="ais-hits--item ais-hits--item"]',
      linkTag: "ais-details-a product-tile",
      imageTag: "img",
      priceTag: "ais-hit--price price",
      titleTag: "ais-hit--title product-tile__title",
    },
  ],
};

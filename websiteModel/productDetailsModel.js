module.exports = {
  amazon: {
    websiteName: "amazon",
    productName: 'span[class="a-size-large product-title-word-break"]',
    productDescription:
      'div[class="a-section a-spacing-medium a-spacing-top-small"]',
    images: 'div[class="imgTagWrapper"]>img',
    productShortDescription:
      'div[class="a-row a-expander-container a-expander-extend-container"]',
    sellPrice:
      'div[class="a-size-medium a-color-price priceBlockBuyingPriceString"]',
    regularPrice: "null",
    suffix: "",
  },
  jbhifi: {
    websiteName: "jbhifi",
    productName: 'h1[itemprop="name"]',
    productDescription: 'div[class="descriptions"]',
    images: 'div[role="option"]>img',
    productShortDescription: 'div[class="product-extra-descriptions"]',
    sellPrice: "sale",
    regularPrice: "s", //<s> tag
    suffix: "",
  },
  bigw: {
    websiteName: "bigw",
    productName: 'h1[class="product-header"]',
    productDescription: 'div[class="TabContent active-true product-details"]',
    images: 'a[class="ProductImage"]>img',
    productShortDescription:
      'div[class="TabContent active-true product-specifications"]',
    sellPrice: 'span[class="Price variant-huge"]',
    regularPrice: 'span[class="Price variant - huge "]',
    suffix: "",
  },
  banggood: {
    websiteName: "banggood",
    productName: 'span[class="product-title-text"]',
    productDescription: 'div[class="tab-cnt"]',
    images: 'div[class="player"]>img',
    productShortDescription:
      'div[class="tab-cnt-specification product_spec_wrap hide"]',
    sellPrice: 'span[class="main-price"]',
    regularPrice: 'span[class="old-price"]',
    suffix: "",
  },
  ebay: {
    websiteName: "ebay",
    productName: 'h1[class="it-ttl"]',
    productDescription: 'div[class="section"]',
    images: 'div[class="img500 vi-img-gallery-fixed-height-500 zoom_able"]>img',
    productShortDescription: 'h1[class="it-ttl"]',
    sellPrice: 'span[class="notranslate"]',
    regularPrice: 'span[class="notranslate"]',
    suffix: "",
  },
};

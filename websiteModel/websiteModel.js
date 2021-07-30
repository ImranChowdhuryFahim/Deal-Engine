module.exports = {
    "bestdeals.today": {
        websiteName: "bestdeals.today",
        websiteLink: `https://au.bestdeals.today/`,
        productDetails: 'div[class="deal__main-wrap"]',
        linkTag: "ver_container clickout product_box_link deal__container deal__container--ab-two-col rf_js_redirect-link",
        imageTag: "img",
        priceTag: "deal__price",
        titleTag: "deal__title-ch deal__title-ch--ab-two-col",
        innerwebsite: 'div[class="deal__main-wrap rf_js_product product-item rf-item rf_js_shop-name"]data-shop-name=""',
        suffix: "",
    },
    "amazon-au": {
        websiteName: "amazon-au",
        websiteLink: `https://www.amazon.com.au/s?k=`,
        productDetails: 'div[class="a-section a-spacing-medium"]',
        linkTag: "a-link-normal s-no-outline",
        imageTag: "img",
        priceTag: "a-offscreen",
        titleTag: "a-link-normal a-text-normal",
        suffix: "",
    },
    bigw: {
        websiteName: "bigw",
        websiteLink: "https://www.bigw.com.au/search?text=",
        productDetails: 'div[class="ProductTile"]',
        linkTag: "product-image",
        imageTag: "img",
        priceTag: "dollars",
        titleTag: "product-name",
        suffix: "",
    },
    jbhifi: {
        websiteName: "jbhifi",
        websiteLink: "https://www.jbhifi.com.au/search?query=",
        productDetails: 'div[class="ais-hits--item ais-hits--item"]',
        linkTag: "ais-details-a product-tile",
        imageTag: "img",
        priceTag: "ais-hit--price price",
        titleTag: "ais-hit--title product-tile__title",
        suffix: "",
    },
    // not working
    //"kogan": {
    //   websiteName: "kogan",
    //   websiteLink: "https://www.kogan.com/au/shop/category/",
    //   productDetails: 'div[class="_1umis"]',
    //   linkTag: "_3w8sH",
    //   imageTag: "img",
    //   priceTag: "_2AQgf",
    //   titleTag: "_1A_Xq",
    //   suffix: "/",
    // },
    // "woolworths":{
    //   websiteName: "woolworths",
    //   websiteLink:
    //     "https://www.woolworths.com.au/shop/search/products?searchTerm=",
    //   productDetails:
    //     'shared-product-tile[class="ng-star-inserted"]',
    //   linkTag: "shelfProductTile-imageWrapper",
    //   imageTag: "img",
    //   priceTag: "price-dollars",
    //   titleTag: "shelfProductTile-descriptionLink",
    //   suffix: "",
    // },
    banggood: {
        websiteName: "banggood",
        websiteLink: "https://www.banggood.com/search/",
        productDetails: 'div[class="p-wrap"]',
        linkTag: "title exclick",
        imageTag: "img",
        priceTag: "price-box",
        titleTag: "title exclick",
        suffix: ".html?from=nav",
    },
    ebay: {
        websiteName: "ebay",
        websiteLink: "https://www.ebay.com.au/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=",
        productDetails: 'div[class="s-item__wrapper clearfix"]',
        linkTag: "s-item__link",
        imageTag: "img",
        priceTag: "s-item__price",
        titleTag: "s-item__title",
        suffix: "",
    },
};
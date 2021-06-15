const { CreateProducts } = require("../models");
module.exports = {
  createProduct: async (req, res, next) => {
    console.log(req.body);

    const product = req.body;

    CreateProducts.create(product).then(()=>{
        res.status(200).json(product);
      }).catch((err)=>{
        res.status(500).json({message: 'could not create tag'});
      })
      

  },

  getAllCreatedProducts: async (req, res, next) => {
    const AllProductsList = await CreateProducts.findAll();
    let productlist = [];

    for(i of AllProductsList)
    {
        productlist.push(i.productName)
    }

    res.send(productlist);
  },


  deleteCreatedProduct: (req,res,next) => {
    res.json({message: "cron request delete korlam"});
  }
};

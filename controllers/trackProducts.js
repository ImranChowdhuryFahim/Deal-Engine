const { TrackedProducts } = require("../models");
const cron = require('node-cron');
const url_taskMap = {};
module.exports = {
  trackProduct: async (req, res, next) => {
    console.log(req.body);

    const product = req.body;

    if(!(req.body.productLink in url_taskMap)){
      let task =await cron.schedule('* * * * *', async() => {
        await TrackedProducts.create(product).then(()=>{
          console.log("added")
        }).catch((err)=>{
          console.log(err);
        })
      });
      url_taskMap[req.body.productLink]=task;
      res.json(product);
    }

    else{
      console.log("already exit")
      res.json({message:"already exit"});
    }
    
    
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
    res.json(AllProductsList);
  },


  deleteTrackedProduct: (req,res,next) => {
    res.json({message: "cron request delete korlam"});
    let job = url_taskMap[1];
    job.stop();
  }
};

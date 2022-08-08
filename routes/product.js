const express = require("express");

const controller = require("../controllers/product");

const router = express.Router();

router.route("/add-product").post(controller.add);
router.route("/get-all-products").get(controller.getAllProducts);
module.exports = router;

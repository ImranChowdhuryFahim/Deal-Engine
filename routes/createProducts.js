const express = require("express");

const controller = require("../controllers/createProduct");

const router = express.Router();

router.route("/create-product").post(controller.createProduct);
router.route("/get-all-created-products").get(controller.getAllCreatedProducts);
module.exports = router;

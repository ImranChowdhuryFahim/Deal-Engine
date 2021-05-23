const express = require("express");

const controller = require("../controllers/trackProducts");

const router = express.Router();

router.route("/track-product").post(controller.trackProduct);
router.route("/get-all-tracked-products").get(controller.getAllTrackedProducts);

module.exports = router;

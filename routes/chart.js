const express = require("express");

const controller = require("../controllers/chart");

const router = express.Router();

router.route("/get-chart-data/:tag").get(controller.getChartData);
module.exports = router;

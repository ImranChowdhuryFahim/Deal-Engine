const express = require('express');

const controller = require('../controllers/search');

const router = express.Router();

router.route('/deal-search/aus').get(controller.getSearchResult);
router.route('/').get(controller.index);

module.exports = router;
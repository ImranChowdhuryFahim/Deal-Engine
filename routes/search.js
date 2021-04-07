const express = require('express');

const controller = require('../controllers/search');

const router = express.Router();

router.route('/search').get(controller.getSearchResult);

module.exports = router;
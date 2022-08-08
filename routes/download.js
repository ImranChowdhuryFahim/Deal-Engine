const express = require('express');

const controller = require('../controllers/download');

const router = express.Router();

router.route('/api/download/:fileName').get(controller.downloadFiles);

module.exports = router;

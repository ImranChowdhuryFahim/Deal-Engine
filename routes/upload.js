const express = require('express');

const controller = require('../controllers/upload');

const router = express.Router();

router.route('/api/upload').post(controller.uploadFiles);

module.exports = router;

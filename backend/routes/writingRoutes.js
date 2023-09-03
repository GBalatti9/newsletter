const express = require('express');

const writingControllers = require('../controllers/writingControllers');

const router = express.Router();

// @GET /user/content-creator
router.get('/content-creator', writingControllers.getBoard);

module.exports = router;
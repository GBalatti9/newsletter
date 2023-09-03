const express = require('express');

const writingControllers = require('../controllers/writingControllers');

const router = express.Router();

// @GET /user/:id/content-creator
router.get('/:id/content-creator', writingControllers.getBoard);

// @POST /user/:id/content-creator
router.post('/:id/content-creator', writingControllers.postNewsletter);

// @POST /user/:id/content-creator
router.post('/:id/content-creator/send', writingControllers.postSendNow);

module.exports = router;
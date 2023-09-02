const express = require('express');

const mainControllers = require('../controllers/mainControllers');

const router = express.Router();

// @GET /
router.get('/', mainControllers.getRegister);

// @POST /
router.post('/', mainControllers.postRegister);


module.exports = router;
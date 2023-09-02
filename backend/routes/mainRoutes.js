const express = require('express');

const mainControllers = require('../controllers/mainControllers');

const router = express.Router();

// @GET /login
router.get('/', mainControllers.getLogin);

// @POST /login
router.post('/login', mainControllers.postLogin);


module.exports = router;
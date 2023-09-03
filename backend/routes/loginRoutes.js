const express = require('express');

const loginControllers = require('../controllers/loginControllers');

const router = express.Router();

// @GET /user/:id/content-creator
router.get('/login', loginControllers.getLogin);

// @POST /user/:id/content-creator
router.post('/login', loginControllers.postLogin);

module.exports = router;
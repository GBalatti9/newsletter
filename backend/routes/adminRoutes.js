const express = require('express');

const adminControllers = require('../controllers/adminControllers');

const router = express.Router();

// @GET /
router.get('/admin', adminControllers.getTableUsers);

// @DELETE
router.put('/admin', adminControllers.deleteUser)

module.exports = router;
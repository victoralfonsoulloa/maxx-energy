const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController.js');

router.get('/plantid', plantController.getAllPlantIds);

module.exports = router;
const express = require('express');
const router = express.Router();
const energyDataController = require('../controllers/energyDataController.js');

router.get('/accounts', energyDataController.getAccounts);

module.exports = router;
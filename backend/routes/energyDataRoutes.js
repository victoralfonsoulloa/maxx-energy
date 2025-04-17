const express = require('express');
const router = express.Router();
const energyDataController = require('../controllers/energyDataController.js');

router.get('/accounts', energyDataController.getAccounts);
router.get('/usage', energyDataController.getAccountUsage);
router.get('/substations', energyDataController.getSubstations);
router.get('/distinctAccounts', energyDataController.getDistinctAccounts);
module.exports = router;
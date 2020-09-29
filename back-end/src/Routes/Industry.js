const { Router } = require('express');
const router = Router();
const industriesController = require('../Controllers/industry.controller');

router.route('/')
  .post(industriesController.createIndustry)
  .get(industriesController.getAllIndustries);

module.exports = router;
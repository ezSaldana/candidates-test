const { Router } = require('express');
const positionController = require('../Controllers/position.controller');
const router = Router();
const positionsController = require('../Controllers/position.controller');

router.route('/')
  .post(positionController.createPosition)
  .get(positionController.getAllPositions);

module.exports = router;
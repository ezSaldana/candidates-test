const { Router } = require('express');
const router = Router();
const degreeController = require('../Controllers/degree.controller');

router.route('/')
  .post(degreeController.createDegree)
  .get(degreeController.getAllDegrees);

module.exports = router;
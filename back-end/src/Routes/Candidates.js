const { Router } = require('express');
const router = Router();
const candidatesController = require('../Controllers/candidates.controller');

router.route('/')
  .post(candidatesController.createCandidate)
  .get(candidatesController.getAllCandidates);

module.exports = router;
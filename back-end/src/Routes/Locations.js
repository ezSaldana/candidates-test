const { Router } = require('express');
const router = Router();
const locationController = require('../Controllers/location.controller');

router.route('/')
  .get(locationController.getAllLocations);

module.exports = router;
const Location = require('../Models/Location');

const locationController = {};

locationController.getAllLocations = (req, res) => {
  Location.find()
    .exec((error, locations) => {
      if (error) {
        return res.status(400).json({
          ok: false,
          msg: 'Couldn\'t find any industries',
          error: error.errors
        });
      }
      res.json({
        ok: true,
        msg: 'Locations found',
        count: locations.length,
        locations,
      });
    });
}

module.exports = locationController;
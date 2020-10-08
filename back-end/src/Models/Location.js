const {Schema, model} = require('mongoose');

const locationSchema = new Schema({
  coords: {
    lat: {
      type: Number,
      required: [true, "Latitude from coords is required"],
    },
    lng: {
      type: Number,
      required: [true, "Longitude from coords is required"],
    }
  },
  address: {
    type: String,
    required: [true, "Path is required"],
  },
  country: {
    type: String,
    required: [true, "Path is required"],
  },
  region: {
    type: String,
    required: [true, "Path is required but wasn't found, select another address"],
  },
  short_code: String,
  city: String,
  postcode: String,
});

module.exports = model('Location', locationSchema);
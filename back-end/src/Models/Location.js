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
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  state: {
    type: String,
    required: [true, "State is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  zipCode: {
    type: String,
    required: [true, "Zip Code is required"],
  },
});

module.exports = model('Location', locationSchema);
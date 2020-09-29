const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const positionSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Position name is required"],
  },
  description: String,
  status: {
    type: Boolean,
    default: true,
  }
});

positionSchema.plugin(uniqueValidator, { message: '{PATH} is already registered, try changing "name"' });

module.exports = model('Position', positionSchema);
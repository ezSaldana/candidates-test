const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const degreeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Degree name is required"],
  },
  description: String,
  status: {
    type: Boolean,
    default: true,
  }
});

degreeSchema.plugin(uniqueValidator, { message: '{PATH} is already registered, try changing "name"' });

module.exports = model('Degree', degreeSchema);
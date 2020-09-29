const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const industrySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Industry name is required"]
  },
  description: String,
  status: {
    type: Boolean,
    default: true
  }
});

industrySchema.plugin(uniqueValidator, { message: '{PATH} is already registered, try changing "name"' });

module.exports = model('Industry', industrySchema);
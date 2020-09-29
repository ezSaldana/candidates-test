const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let candidatesSchema = new Schema({
  name: {
    type: String,
    required: [true, ''],
  },
  degree: {
    type: Schema.Types.ObjectId,
    ref: 'Degree',
    required: [true, 'Degree is required'],
  },
  position: {
    type: Schema.Types.ObjectId,
    ref: 'Position',
    required: false,
  },
  industry: {
    type: Schema.Types.ObjectId,
    ref: "Industry",
    required: true,
  },
  cellphone: {
    type: String,
    unique: true,
    required: [true, 'Cellphone is required'],
  },
  salary: {
    type: Number,
    required: [true, 'Salary is required'],
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    required: [true, 'Location is required'],
  },
  avatar: String,
  addedDate: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: Boolean,
    default: true,
  },
});

candidatesSchema.plugin(uniqueValidator, { message: '{PATH} ya está registrado, intenta registrar uno nuevo.' });

module.exports = model('Candidates', candidatesSchema);
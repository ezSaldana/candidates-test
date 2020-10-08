const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let candidatesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Field is required'],
  },
  degree: {
    type: Schema.Types.ObjectId,
    ref: 'Degree',
    required: [true, 'Field is required'],
  },
  position: {
    type: Schema.Types.ObjectId,
    ref: 'Position',
    default: '5f72792d0886d711a0421cd4',
    required: false,
  },
  industry: {
    type: Schema.Types.ObjectId,
    ref: "Industry",
    required: [true, 'Field is required'],
  },
  cellphone: {
    type: String,
    unique: true,
    required: [true, 'Field is required'],
  },
  salary: {
    type: Number,
    required: [true, 'Field is required'],
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    required: [true, 'Field is required'],
  },
  avatar: {
    type: String,
    required: [true, "Field is required"],
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

candidatesSchema.plugin(uniqueValidator, { message: 'Error, expected \`{PATH}\` to be unique. Value: {VALUE} already registered' });

module.exports = model('Candidates', candidatesSchema);
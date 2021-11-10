const { Schema, model } = require('mongoose');
const serviceProvided = require('./ServiceProvided');

const userSchema = new Schema(
  {
    title:{
      type:String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    organisation: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    telephone: {
      type: String,
      required: true,
      trim: true
    },
    orgWebsite: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      required: true,
    },
    // services:[serviceProvided],
    // services: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'serviceProvided'
    //   }
    // ]
  }
);

const User = model('User', userSchema);

module.exports = User;

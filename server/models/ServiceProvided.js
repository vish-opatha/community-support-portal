const { Schema, model } = require('mongoose');

const serviceProvidedSchema = new Schema({
  eligibility: {
    type: String,
    required: true,
    trim: true,
  },
  openedDays: {
    type: String,
    required: true,
  },
  openedHours: {
    type: String,
    required: true,
  },
  modeOfCommunication: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  categoryId: {
    type:String,
    required:true
  }

  //References are required to other tables.
});

const ServiceProvided = model('ServiceProvided', serviceProvidedSchema);

module.exports = ServiceProvided;

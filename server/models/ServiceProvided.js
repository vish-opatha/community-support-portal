const { Schema, model } = require('mongoose');
const ServiceType = require('./ServiceType');

const serviceProvidedSchema = new Schema(
  {
    eligibility:{
      type:String,
      required: true,
      trim: true,
    },
    openedDays: {
      type: [String],
      required: true,
    },
    openedHours:{
      type: [String],
      required: true,
    },
    modeOfCommunication:{
        type:[String],
        required: true,
    },
    location:{
        type:String,
        required: true,
        trim: true,
    },
    serviceType: [ServiceType]

    //References are required to other tables.
  }
);

const serviceProvided = model('serviceProvided', serviceProvidedSchema);

module.exports = serviceProvided;
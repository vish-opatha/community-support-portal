const { Schema, model } = require('mongoose');

const serviceCategorySchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  customerDescription: {
    type: String,
    required: true,
    trim: true,
  },
});

const ServiceCategory = model('ServiceCategory', serviceCategorySchema);

module.exports = ServiceCategory;

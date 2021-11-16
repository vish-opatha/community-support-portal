const db = require('../config/connection');
const { User, ServiceCategory, ServiceProvided } = require('../models');
const userData = require('./userData.json');
const categoryData = require('./serviceCategoryData.json');
const serviceData = require('./serviceData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await ServiceCategory.deleteMany({});
  const users = await User.insertMany(userData);
  const categories = await ServiceCategory.insertMany(categoryData);
  const services = await ServiceProvided.insertMany(serviceData);

  console.log('all done!');
  process.exit(0);
});

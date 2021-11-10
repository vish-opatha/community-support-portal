const { User, ServiceCategory } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      // Get and return all documents from the classes collection
      return await User.find({});
    },
    serviceCategories: async () => {
      return await ServiceCategory.find({});
    },
  },
};

module.exports = resolvers;

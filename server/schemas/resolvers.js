const { User, ServiceCategory, ServiceProvided } = require('../models');

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

    servicesProvided: async () => {
      return await ServiceProvided.find({}).populate('ServiceCategory');
    },

    user: async (parent, args) => {
      return await User.findById(args.id);
    },
  },
};

module.exports = resolvers;

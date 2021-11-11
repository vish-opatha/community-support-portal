const { User, ServiceCategory, ServiceProvided } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
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

    serviceCategory: async (parent, args) => {
      return await ServiceCategory.findById(args.id);
    },

    //########## Search Services by location=================
    servicesByLocation: async (parent, args) => {
      const a = await ServiceProvided.find({}).populate('ServiceCategory');
      return a.filter((s) => s.location == args.location);
    },
    // ------------------------------------------------------ .populate('ServiceCategory')

    // serviceByCategory: async (parent, { id }) => {
    //   return await ServiceProvided.findById(id).populate('ServiceCategory');
    // },

    // Mutation: {
    //   addUser: async (
    //     parent,
    //     {
    //       title,
    //       firstName,
    //       lastName,
    //       organisation,
    //       location,
    //       email,
    //       telephone,
    //       orgWebsite,
    //       password,
    //     }
    //   ) => {
    //     // Create and return the new School object
    //     return await User.create({
    //       title,
    //       firstName,
    //       lastName,
    //       organisation,
    //       location,
    //       email,
    //       telephone,
    //       orgWebsite,
    //       password,
    //     });
    //   },
    // },
  },
};

module.exports = resolvers;

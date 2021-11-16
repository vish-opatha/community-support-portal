const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const ServiceCategory = require('../models/ServiceCategory');
const ServiceProvided = require('../models/ServiceProvided');
const { signToken } = require('../utils/auth');

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
      return await ServiceProvided.find({});
    },

    user: async (parent, args) => {
      return await User.findById(args.id);
    },

    serviceCategory: async (parent, args) => {
      return await ServiceCategory.findById(args.id);
    },

    //########## Search Services by location=================
    servicesByLocation: async (parent, args) => {
      const a = await ServiceProvided.find({});
      return a.filter((s) => s.location == args.location);
    },

    // serviceByCategory: async (parent, { id }) => {
    //   return await ServiceProvided.findById(id).populate('ServiceCategory');
    // },
  },

  Mutation: {
    addUser: async (
      parent,
      {
        title,
        firstName,
        lastName,
        organisation,
        location,
        email,
        telephone,
        orgWebsite,
        password,
      }
    ) => {
      const user = await User.create({
        title,
        firstName,
        lastName,
        organisation,
        location,
        email,
        telephone,
        orgWebsite,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    removeService: async (parent, { serviceId }) => {
      return await ServiceProvided.findOneAndDelete({ _id: serviceId });
    },

    addService: async (
      parent,
      {
        description,
        organisation,
        eligibility,
        openedDays,
        openedHours,
        modeOfCommunication,
        location,
        categoryId,
      }
    ) => {
      const service = await ServiceProvided.create({
        description,
        organisation,
        eligibility,
        openedDays,
        openedHours,
        modeOfCommunication,
        location,
        categoryId,
      });

      return service;
    },
  },
};
module.exports = resolvers;

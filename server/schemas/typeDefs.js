const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    title: String
    firstName: String
    lastName: String
    organisation: String
    location: String
    email: String
    telephone: String
    orgWebsite: String
    password: String
  }

  type ServiceCategory {
    _id: ID
    description: String
    customerDescription: String
  }

  type ServiceProvided {
    _id: ID
    eligibility: String
    openedDays: [String]
    openedHours: [String]
    modeOfCommunication: [String]
    location: String
    serviceCategories: [ServiceCategory]
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    serviceCategories: [ServiceCategory]
    servicesProvided: [ServiceProvided]
    user(id: ID): User
    serviceCategory(id: ID): ServiceCategory
    #servicesByLocation(suburb: location): [ServiceProvided]
  }
`;

module.exports = typeDefs;

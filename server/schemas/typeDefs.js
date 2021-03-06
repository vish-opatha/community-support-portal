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

  type Auth {
    token: ID!
    user: User
  }

  type ServiceCategory {
    _id: ID
    description: String
    customerDescription: String
    categoryId:Int
  }

  type ServiceProvided {
    _id: ID
    description: String
    organisation: String
    eligibility: String
    openedDays: String
    openedHours: String
    modeOfCommunication: String
    location: String
    categoryId:String
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    serviceCategories: [ServiceCategory]
    servicesProvided: [ServiceProvided]
    user(id: ID): User
    serviceCategory(id: ID): ServiceCategory
    servicesByLocation(location: String): [ServiceProvided]
  }

  type Mutation {
    addUser(
      title: String
      firstName: String
      lastName: String
      organisation: String
      location: String
      email: String
      telephone: String
      orgWebsite: String
      password: String
    ): Auth

    login(email: String!, password: String!): Auth

    removeService(serviceId: ID!): ServiceProvided

    addService(
      description: String
      organisation: String
      eligibility:String
      openedDays:String
      openedHours:String
      modeOfCommunication:String
      location:String
      categoryId: String
    ): ServiceProvided
  }
`;

module.exports = typeDefs;

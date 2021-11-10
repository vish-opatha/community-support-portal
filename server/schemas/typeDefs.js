const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
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

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    serviceCategories: [ServiceCategory]
  }
`;

module.exports = typeDefs;

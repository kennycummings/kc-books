const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String!
  }

  type Query {
    books: [Book!]!
  }

  type Mutation {
    addBook(title: String!, author: String!, description: String!): Book!
  }
`;

module.exports = typeDefs;

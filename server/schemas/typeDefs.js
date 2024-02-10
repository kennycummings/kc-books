// const { gql } = require('apollo-server-express');

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(title: String!, author: String!, description: String!): Book!
  }
`;

module.exports = typeDefs;

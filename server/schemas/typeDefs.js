const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    books: [Book!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(title: String!, author: String!, description: String!): Book!
  }
`;

module.exports = typeDefs;

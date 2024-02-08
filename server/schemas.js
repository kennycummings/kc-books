const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String!
    image: String!
    link: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, description: String!, image: String!, link: String!): Book
  }
`;

const resolvers = {
  Query: {
    books: async () => {
      // Logic to fetch books from database
      return [];
    },
  },
  Mutation: {
    addBook: async (_, { title, author, description, image, link }) => {
      // Logic to add a new book to database
      const newBook = { _id: '1', title, author, description, image, link };
      return newBook;
    },
  },
};

module.exports = { typeDefs, resolvers };

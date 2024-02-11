// // const { gql } = require('apollo-server-express');

// const typeDefs = `
//   type User {
//     _id: ID!
//     username: String!
//     email: String
//     bookCount: Int
//     savedBooks: [Book]
//   }

//   type Book {
//     _id: ID!
//     title: String!
//     author: String!
//     description: String!
//   }
  
//   type Auth {
//     token: ID!
//     user: User
//   }

//   type Query {
//     me: User
//   }

//   type Mutation {
//     addUser(username: String!, email: String!, password: String!): Auth
//     addBook(title: String!, author: String!, description: String!): Book!
//   }
// `;

// module.exports = typeDefs;


const { User, Book } = require('./models'); // Import Mongoose models

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      // Implement logic to get the currently logged-in user
      const userId = context.user ? context.user._id : null;
      if (!userId) {
        return null; // If user is not logged in, return null
      }
      return await User.findById(userId); // Return the user if logged in
    }
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = generateToken(user); // Implement your token generation logic
      return { token, user }; // Return token and user in the Auth object
    },
    addBook: async (_, { title, author, description }) => {
      return await Book.create({ title, author, description });
    }
  },
  User: {
    bookCount: async (user) => {
      return user.savedBooks.length; // Assuming savedBooks is an array field in User model
    }
  }
};

module.exports = resolvers;


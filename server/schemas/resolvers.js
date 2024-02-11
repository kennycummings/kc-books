// const { User } = require("../models");
// const { signToken, AuthenticationError } = require("../utils/auth")
// // const books = [
// //     { _id: '1', title: 'Book 1', author: 'Author 1', description: 'Description 1' },
// //     { _id: '2', title: 'Book 2', author: 'Author 2', description: 'Description 2' }
// //   ];

//   const resolvers = {
//     Query: {
//       me: async (parent, args, context) => {
//         if (context.user) {
//           const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
    
//           return userData;
//         }
    
//         throw AuthenticationError;
//       },  
//     },
//     Mutation:{
//       addUser: async (parent, args) => {
//         const user = await User.create(args);
//         const token = signToken(user);
//         return { user, token }; 
//       },

//       addBook: async (parent, { title, author, description }) => {
//         const newBook = await Book.create({ title, author, description });
//         return newBook;
//       }
//     }
//   }
//   module.exports = resolvers;
  

const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create user');
      }
    },
    addBook: async (parent, { title, author, description }) => {
      const newBook = await Book.create({ title, author, description });
      return newBook;
    }
  }
};

module.exports = resolvers;

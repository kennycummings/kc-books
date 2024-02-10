const { User } = require("../models");
const { signToken } = require("../utils/auth")
// const books = [
//     { _id: '1', title: 'Book 1', author: 'Author 1', description: 'Description 1' },
//     { _id: '2', title: 'Book 2', author: 'Author 2', description: 'Description 2' }
//   ];
  
  const resolvers = {
    Query: {
      books: () => books
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { user, token }; 
      },


      addBook: (_, { title, author, description }) => {
        const newBook = { _id: String(books.length + 1), title, author, description };
        books.push(newBook);
        return newBook;
      }
    }
  };
  
  module.exports = resolvers;
  
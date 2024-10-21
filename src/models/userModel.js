const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
     {
          name: {
               type: String,
               required: true,
          },
          email: {
               type: String,
               required: true,
               unique: true,
          },
          phone: {
               type: String,
               required: true,
               unique:true,
          },
     },
     {
          timestamps: true,
     }
);

// Chỉ định rõ ràng collection là 'user'
const User = mongoose.model('User', userSchema, 'user');


module.exports = User;
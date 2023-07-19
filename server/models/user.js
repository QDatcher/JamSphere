const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = {
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  coverPicId: {
    type: String
  },
  friendList: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  }
};
  module.exports = mongoose.model('User', userSchema);
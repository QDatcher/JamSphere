const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
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

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
  module.exports = mongoose.model('User', userSchema);
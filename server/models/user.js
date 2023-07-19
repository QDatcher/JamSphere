const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
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
    },
  },
  //code to make the virtuals work
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//VIRTUALS------------------------------------

//encrypting password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//checking if password is correct
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

// Models
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Initialize all models
const initModels = () => {
    mongoose.model('User', User);
    mongoose.model('Post', Post);
    mongoose.model('Comment', Comment);
};

module.exports = {
    initModels,
    User,
    Post,
    Comment
};

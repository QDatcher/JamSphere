const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Comment } = require("../models");
const { signToken } = require("../utils/auth");
const { text } = require("express");

const resolvers = {
  Query: {
    // Get specific User (View your profile)
    getUser: async (parent, { userId }) => {
      return await User.findOne({ _id: userId });
    },
    // Get all posts 
    getAllPosts: async () => {
      return await Post.find();
    },
    // Get all posts from everyone
    getPost: async (parent, { postId }) => {
      return await Post.findOne({ _id: postId });
    },
    // Get all posts from a specific user
    userPosts: async (parent, { userId }) => {
      return await Post.find({ authorId: userId });
    },
    // Get all friends of a specific user
    userFriends: async (parent, { userId }) => {
      const user = await User.findOne({ _id: userId }).populate("friendList");
      return user.friendList;
    },
    // Get comments for a specific post
    getComment: async (parent, { commentId }) => {
      return await Comment.findOne({ _id: commentId });
    },
  },

  Mutation: {
    signup: async (
      parent,
      { name, username, email, password, coverPicId }
    ) => {
      const profile = await User.create({
        name,
        username,
        email,
        password,
        coverPicId,
      });
      const token = signToken(profile);
    
      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },
    
    addFriend: async (parent, { userId, friendId }, context) => {
      if (context.user && context.user._id === userId) {
        const user = await User.findOne({ _id: userId });
  
        if (!user.friendList.includes(friendId)) {
          user.friendList.push(friendId);
          await user.save();
        }
  
        return user;
      }
  
      throw new AuthenticationError('You need to be logged in!');
    },
                    // parameters
    createPost: async (parent, { artist, title, songURL, postText }, context) => {
      if (context.user) {
        //variables
          const newPost = await Post.create({
              authorId: context.user._id,
              artist: artist,
              title: title,
              songURL: songURL,
              postText: postText
          });
  
          await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { posts: newPost._id } }
          );
  
          return newPost;
      }
  
      throw new AuthenticationError('You need to be logged in!');
    },
    

    deletePost: async (parent, { postId }) => {
      // Implement the logic to delete a post by postId
      const deletedPost = await Post.findByIdAndDelete(postId);
      return deletedPost;
    },

    deleteUser: async (parent, { userId }) => {
      // Implement the logic to delete a user by userId
      const deletedUser = await User.findByIdAndDelete(userId);
      return deletedUser;
    },
  },
};

module.exports = resolvers;

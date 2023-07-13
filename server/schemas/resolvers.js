require("dotenv").config();
const cloudinary = require('cloudinary').v2;
const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');
const user = require("../models/user");

const resolvers = {
  Queries: {
    // Get specific User (View your profile)
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId });
    },
    // Get all posts from everyone
    posts: async () => {
      return await Post.find({});
    },
    // Get all posts from a specific user
    userPosts: async (parent, { userId }) => {
      return await Post.find({ authorId: userId });
    },

  },

  Mutation: {
    // signup: async (parent, { firstName, lastName, username, email, password }) => {
    //   const profile = await Profile.create({ firstName, lastName, username, email, password });
    //   const token = signToken(profile);

    //   return { token, profile };
    // },

    login: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    uploadPhoto: async (_, { photo }) => {
      //initialize cloudinary
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      /*
      try-catch block for handling actual image upload
      */
      try {
        const result = await cloudinary.v2.uploader.upload(photo, {
          //here i chose to allow only jpg and png upload
          allowed_formats: ["jpg", "png"],
          //generates a new id for each uploaded image
          public_id: "",
          /*creates a folder called "your_folder_name" where images will be stored.
          */
          folder: "your_folder_name",
        });
      } catch (e) {
        //returns an error message on image upload failure.
        return `Image could not be uploaded:${e.message}`;
      }
      /*returns uploaded photo url if successful `result.url`.
      if we were going to store image name in database,this
      */
      return `Successful-Photo URL: ${result.url}`;
    },
  },
};

module.exports = resolvers;
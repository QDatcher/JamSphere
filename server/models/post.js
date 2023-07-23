const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // photo: {
    //   type: String,
    // },
    artist: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    comments: {
      type: [Schema.Types.ObjectId],
      ref: "Comment",
    },
    lastEditedAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    commentContent: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    lastEditedAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);

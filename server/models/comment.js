const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    authorName: {
      type: String,
      required: true,
    },
    commentContent: {
      type: String,
      required: true,
    },
    lastEditedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);

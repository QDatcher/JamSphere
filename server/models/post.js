const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    photo: {
      type: String,
    },
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
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);

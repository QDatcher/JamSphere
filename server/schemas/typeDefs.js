const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
  _id: ID!
  name: String!
  email: String!
  password: String!
  coverPicId: String
  friendList: [User]!
}

type Post {
  _id: ID!
  authorId: User!
  artist: String
  title: String!
  comments: [Comment]
  lastEditedAt: String
}

type Comment {
  _id: ID!
  authorId: User!
  postId: Post
  authorName: String!
  commentContent: String!
  lastEditedAt: String
}
type Query {
  getUser(userId: ID!): User
  getPost(postId: ID!): Post
  getComment(commentId: ID!): Comment
    _: Boolean
  }

  type Mutation {
    uploadPhoto(photo: String): String
    createUser(name: String!, email: String!, password: String!): User!
    createPost(authorId: ID!, artist: String, title: String!): Post!
    createComment(authoerId: ID!, postId: ID!, authorName: String!, commentContent: String!): Comment!
  }
`;

module.exports = typeDefs;
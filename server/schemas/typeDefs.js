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
  userPosts(userId: ID!): [Post]
  userFriends(userId: ID!): [User]
  getComment(commentId: ID!): Comment
}

type AuthData {
  token: String!
  profile: User!
}

type Mutation {
  uploadPhoto(photo: String): String
  createPost(authorId: ID!, artist: String, title: String!): Post!
  createComment(authorId: ID!, postId: ID!, authorName: String!, commentContent: String!): Comment!
  login(email: String!, password: String!): AuthData!
  signup(name: String!, username: String!, email: String!, password: String!): AuthData!
  deletePost(postId: ID!): Post
  deleteUser(userId: ID!): User
}
`;

module.exports = typeDefs;
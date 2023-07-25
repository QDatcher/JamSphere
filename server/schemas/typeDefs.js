const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  name: String!
  username: String!
  email: String!
  password: String!
  coverPicId: String
  friendList: [User]
}

type Post {
  _id: ID!
  authorId: User!
  artist: String
  title: String!
  songURL: String!
  postText: String!
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

type AuthData {
  token: ID!
  profile: User!
}

type Query {
  getUser(userId: ID!): User
  getPost(postId: ID!): Post
  getAllPosts: [Post]
  userPosts(userId: ID!): [Post]
  userFriends(userId: ID!): [User]
  getComment(commentId: ID!): Comment
}

type Mutation {
  createPost(authorId: ID!, artist: String!, title: String!, songURL: String!, postText: String!): Post!
  createComment(authorId: ID!, postId: ID!, commentContent: String!): Comment!
  login(email: String!, password: String!): AuthData!
  signup(name: String!, username: String!, email: String!, password: String!, coverPicId: String): AuthData!
  deletePost(postId: ID!): Post
  deleteUser(userId: ID!): User
  addFriend(userId: ID!, friendId: ID!): User
}
`;

module.exports = typeDefs;
import { gql } from '@apollo/client';

export const GET_POST = gql`
query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      artist
      songURL
      postText
      authorId {
        _id
      }
      lastEditedAt
      comments {
        _id
      }
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    getAllPosts {
      _id
      title
      artist
      songURL
      postText
      authorId {
        _id
      }
      lastEditedAt
      comments {
        _id
      }
    }
  }
`;


export const YOUR_PROFILE = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      name
      username
      email
      coverPicId
      friendList {
        _id
      }
    }
  }
`;


export const User_Profile = gql`
query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      coverPicId
      name
      username
      email
      friendList {
        _id
      }
    }
  }
`;

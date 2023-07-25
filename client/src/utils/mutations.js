import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signup($name: String!, $username: String!, $email: String!, $password: String!, $coverPicId: String!) {
    signup(name: $name, username: $username, email: $email, password: $password, coverPicId: $coverPicId) {
      token
      profile {
        _id
        name
        username
        email
        coverPicId
      }
    }
  }
`;

export const CREATE_POST = gql`
mutation createPost($authorId: ID!, $artist: String!, $title: String!, $songUrl: String!, $postText: String!) {
  createPost(authorId: $authorId, artist: $artist, title: $title, songURL: $songUrl, postText: $postText) {
    _id
    artist
    authorId {
      _id
    }
    title
    postText
    songURL
    lastEditedAt
  }
}`;


export const ADD_FRIEND = gql`
  mutation AddFriend($userId: ID!, $friendId: ID!) {
    addFriend(
      userId: $userId
      friendId: $friendId
    ) {
      _id
      friendList {
        _id
      }
    }
  }
`;

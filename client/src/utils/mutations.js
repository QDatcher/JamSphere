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

export const CREATE_POST = gql
`mutation CreatePost($authorId: ID!, $title: String!, $songUrl: String!, $artist: String, $postText: String!) {
  createPost(authorId: $authorId, title: $title, songURL: $songUrl, artist: $artist, postText: $postText) {
    _id
    artist
    title
    songURL
    authorId {
      _id
    }
    comments {
      _id
    }
    lastEditedAt
    postText
  }
}`;


export const ADD_FRIEND = gql`
  mutation AddFriend($userId: ID!, $friendId: ID!) {
    updateUser(
      userId: $userId
      friendList: { add: [$friendId] }
    ) {
      _id
      friendList {
        _id
      }
    }
  }
`;
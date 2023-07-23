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
  mutation signup($name: String!, $username: String!, $email: String!, $password: String!) {
    signup(name: $name, username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        name
        username
        email
      }
    }
  }
`;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import SignUpPage from './components/views/SignUp/SignUp';
import Profile from './components/views/Profile/Profile';
import LoginPage from './components/views/Login/Login';
import PageLayout from './components/Layout/PageLayout';
import Home from './components/views/Home/Home';
import UserProfile from './components/views/UserProfile/UserProfile';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>

      <Router>

        <PageLayout />
        <Routes>
          <Route
              path={`/`}
              element={<Home />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
           path="/profile/:userId"
           element={<UserProfile />}
          />
          <Route
            path="/signup"
            element={<SignUpPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
        </Routes>


      </Router>

    </ApolloProvider>
  );
}

export default App;

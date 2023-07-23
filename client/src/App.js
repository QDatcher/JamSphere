import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import SignUpPage from './components/views/SignUp/SignUp';

import Profile from './components/views/Profile/Profile';

import LoginPage from './components/views/Login/Login';


import PageLayout from './components/layout/PageLayout';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>

      <Router>

        <PageLayout />
        <Routes>
          {/* <Route

        <PageLayout />
        <Routes>
          {/* <Route
              path="/"
              element={<Homepage />}
            /> */}
          <Route
            path="/profile"
            element={<Profile />}
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

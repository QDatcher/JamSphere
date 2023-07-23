import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


import SignUpPage from './components/views/signUp/SignUp';
import Profile from './components/views/profile/Profile';
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
            path="/Profile"
            element={<Profile />}
          />
          <Route
            path="/SignUp"
            element={<SignUpPage />}
          />
          <Route
            path="/Login"
            element={<LoginPage />}
          />
        </Routes>


      </Router>

    </ApolloProvider>
  );
}

export default App;

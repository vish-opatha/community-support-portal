import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './components/Search';
import Login from './components/Login';
import Signup from './pages/Signup';
import UserService from './pages/UserServiceProfile';
// import UserService from './pages/UserServiceProfile';

// import NotFound from './pages/NotFound';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/agencylogin">
            <Login />
          </Route>
          <Route exact path="/agencysignup">
            <Signup />
          </Route>
          <Route exact path="/UserService">
            <UserService/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;

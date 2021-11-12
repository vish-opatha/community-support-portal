import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AgencyLogin from './pages/AgencyLoginForm';
import Header from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        {/* <div className="flex-column justify-flex-start min-100-vh"> */}
        <Header />
        <div className="container">
          {/* Define routes to render different page components at different paths */}
          <Route exact path="/">
            <MainContent />
          </Route>
          {/* Define a route that will take in variable data */}
          <Route exact path="/agencylogin">
            <AgencyLogin />
          </Route>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;

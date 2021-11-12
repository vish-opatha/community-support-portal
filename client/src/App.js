import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import AgencyLogin from './components/styles/AgencyLoginForm';
// import ButtonAppBar from './components/Navigation';
// import Footer from './components/Footer';
// import MainContent from './components/MainContent';
// import AgencySignup from './components/AgencySignup';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <>
          {/* <div className="flex-column justify-flex-start min-100-vh"> */}
          {/* <ButtonAppBar /> */}
          {/* <AgencyLogin /> */}
          <Switch>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/" component={MainContent} />
            {/* Define a route that will take in variable data */}
            <Route exact path="/agencylogin" component={AgencyLogin} />
            <Route exact path="/signup" component={AgencySignup} />
          </Switch>
          {/* <Footer /> */}
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;

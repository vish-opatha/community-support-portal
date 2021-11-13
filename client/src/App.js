import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './components/Search';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Search />
      <Footer />
    </>
  );
}

export default App;

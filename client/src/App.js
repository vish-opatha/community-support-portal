import './App.css';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AgencyLogin from './pages/AgencyLoginForm';

import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainContent />
        </Route>
        <Route path="/agencylogin">
          <AgencyLogin />
        </Route>
      </Switch>
    </Router>
  );
}

// const Container = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   flex-direction: column-reverse;
//   justify-content: space-between;
//   align-items: stretch;
//   align-content: center
// }
// `;

export default App;

// import './App.css';
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <MainContent />

        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: stretch;
  align-content: center
}
`;

export default App;

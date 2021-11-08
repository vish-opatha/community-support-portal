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
      </Container>

      <Footer />
    </>
  );
}

const Container = styled.div`
  // background: #fbf7ef;
  // height: 100vh;
`;

export default App;

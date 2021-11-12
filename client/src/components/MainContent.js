import React from 'react';
import styled from 'styled-components';
import AgencySignup from './AgencySignup';
import CreateService from './CreateService';
import SearchService from './SearchServices';

const MainContent = () => {
  return (
    <>
      <div>
        <Section>
          <Para>
            We are here provide a information, to get the support you want. You
            are valued, loved and blessed!
          </Para>
        </Section>

        <AgencySignup />
        <CreateService />
        <SearchService />
        <SearchService />
      </div>
    </>
  );
};

export default MainContent;

const Section = styled.div`
  //   padding: 0 2rem;
  display: flex;
  // justify-content: space-between;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Para = styled.p`
  text-color: black;
`;
